#!/bin/bash
set -e

# Monorepo root
cat << 'PKG' > package.json
{
  "name": "jewelry-platform",
  "private": true,
  "packageManager": "pnpm@10.28.1",
  "workspaces": ["apps/*","services/*","packages/*"],
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "typecheck": "turbo typecheck",
    "lint": "turbo lint",
    "format": "prettier -w .",
    "db:up": "docker compose -f infra/docker-compose.yml up -d",
    "db:down": "docker compose -f infra/docker-compose.yml down -v"
  },
  "devDependencies": { "prettier": "3.6.2", "turbo": "2.5.6", "typescript": "5.9.2" }
}
PKG

cat << 'YML' > pnpm-workspace.yaml
packages:
  - "apps/*"
  - "services/*"
  - "packages/*"
YML

cat << 'TURBO' > turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev": { "cache": false, "persistent": true },
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**", ".next/**"] },
    "typecheck": { "dependsOn": ["^typecheck"] },
    "lint": { "dependsOn": ["^lint"] }
  }
}
TURBO

cat << 'TS' > tsconfig.base.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true,
    "resolveJsonModule": true
  }
}
TS

# Create directories
mkdir -p apps services packages infra/postgres-init .trae/documents

# Vite templates
for app in storefront-web showroom-console admin-content admin-catalog admin-analytics; do
  npm create vite@latest apps/$app -- --template react-ts
done

# BFF and Services
for svc in apps/bff-storefront apps/bff-admin apps/bff-showroom services/iam services/regions services/cms services/catalog-jewelry services/catalog-stones services/inventory services/appointments; do
  mkdir -p $svc/src
  cat << 'PKG' > $svc/package.json
{
  "name": "@$(echo $svc | tr '/' '/')",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx src/index.ts",
    "build": "tsc -p tsconfig.json",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "fastify": "^5.5.0",
    "@fastify/cors": "^11.1.0"
  },
  "devDependencies": {
    "tsx": "^4.20.5",
    "typescript": "5.9.2"
  }
}
PKG
  cat << 'TS' > $svc/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "noEmit": false
  },
  "include": ["src/**/*.ts"]
}
TS
  cat << 'IDX' > $svc/src/index.ts
import Fastify from 'fastify'
import cors from '@fastify/cors'
const app = Fastify({ logger: true })
await app.register(cors, { origin: true })
app.get('/health', async () => ({ ok: true, service: '$(basename $svc)' }))
const port = Number(process.env.PORT || Math.floor(Math.random() * 1000 + 4000))
await app.listen({ port, host: '0.0.0.0' })
IDX
done

# Infra
cat << 'DC' > infra/docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./postgres-init:/docker-entrypoint-initdb.d
  redis:
    image: redis:7
    ports:
      - "6379:6379"
  nats:
    image: nats:2
    ports:
      - "4222:4222"
volumes:
  postgres_data:
DC

cat << 'SQL' > infra/postgres-init/01-create-databases.sql
CREATE DATABASE iam_db;
CREATE DATABASE regions_db;
CREATE DATABASE cms_db;
CREATE DATABASE jewelry_db;
CREATE DATABASE stones_db;
CREATE DATABASE inventory_db;
CREATE DATABASE appointments_db;
CREATE DATABASE concierge_db;
CREATE DATABASE orders_db;
CREATE DATABASE production_db;
SQL

pnpm install
