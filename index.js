const pino = require('pino')()

const client = 'tescobank'

pino.info({
    client,
    user: 'Andreas Land',
    action: 'create-cluster'
})