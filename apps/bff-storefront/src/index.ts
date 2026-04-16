import cors from '@fastify/cors'
import Fastify from 'fastify'

const port = Number(process.env.PORT ?? 4010)

const app = Fastify({ logger: true })

await app.register(cors, { origin: true })

app.get('/health', async () => ({ ok: true, service: 'bff-storefront' }))

await app.listen({ port, host: '0.0.0.0' })
