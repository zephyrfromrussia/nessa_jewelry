import Fastify from 'fastify'
import cors from '@fastify/cors'
const app = Fastify({ logger: true })
await app.register(cors, { origin: true })
app.get('/health', async () => ({ ok: true, service: '$(basename $svc)' }))
const port = Number(process.env.PORT || Math.floor(Math.random() * 1000 + 4000))
await app.listen({ port, host: '0.0.0.0' })
