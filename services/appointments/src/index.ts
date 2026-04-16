import Fastify from 'fastify'

const port = Number(process.env.PORT ?? 5016)

const app = Fastify({ logger: true })

app.get('/health', async () => ({ ok: true, service: 'appointments' }))

await app.listen({ port, host: '0.0.0.0' })
