import cors from '@fastify/cors'
import Fastify from 'fastify'

const port = Number(process.env.PORT ?? 4011)

const app = Fastify({ logger: true })

await app.register(cors, { origin: true })

app.get('/health', async () => ({ ok: true, service: 'bff-admin' }))

await app.listen({ port, host: '0.0.0.0' })
