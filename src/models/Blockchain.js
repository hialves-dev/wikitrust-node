let multichain = require('multichain-node')

export default class Blockchain {
  constructor() {
    this.client = this.connect()
  }

  connect() {
    return multichain({
      host: process.env.CHAIN_HOST,
      port: process.env.CHAIN_PORT,
      user: process.env.CHAIN_USER,
      pass: process.env.CHAIN_PASS
    })
  }

  getClient() {
    return this.client
  }
}
