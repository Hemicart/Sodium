const fastify = require('fastify')({ logger: true })
const fastifyStatic = require('fastify-static')
const path = require('path')
const proxy = require('fastify-http-proxy')

fastify.register(fastifyStatic, {
    wildcard: false,
    root: path.join(__dirname, '../dist')  
})

fastify.get('/*', function (req, reply) {
    return reply.sendFile('index.html')
})

fastify.register(proxy, {
    upstream: 'http://193.109.69.16:8989',
    prefix: '/api',
    http2: false
})

const start = async () => {
    try {
      await fastify.listen(8080, '0.0.0.0')
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()