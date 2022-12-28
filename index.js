require('dotenv').config()
const server = require('./api/server')

const port = process.env.PORT || 9000;
const host = process.env.HOSTNAME || 'http://localhost'

server.listen(port, () => console.log(`\n** Running on ${host}:${port} **\n`))
