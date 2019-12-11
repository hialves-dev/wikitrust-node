import Blockchain from './Blockchain'

export default class Address extends Blockchain {
  constructor() {
    super()
    //FIX
    this.myAddress = this.getMyAddress()
  }

  getMyAddress() {
    return new Promise((resolve, reject) => {
      this.client.listAddresses((err, info) => {
        err ? reject(err) : resolve(info)
      })
    })
  }
}
