import Fastify from 'fastify'

const port = Number(process.env.PORT ?? 5013)

const app = Fastify({ logger: true })

app.get('/health', async () => ({ ok: true, service: 'catalog-jewelry' }))

await app.listen({ port, host: '0.0.0.0' })
