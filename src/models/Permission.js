import Blockchain from './Blockchain'

export default class Permission extends Blockchain {
  constructor(fromAddress, toAddress) {
    super()
    this.from = from
    this.to = to
  }

  async grantPermission(permissions) {
    return await this.client.grantFrom({
      from: this.from,
      to: this.to,
      permissions
    })
  }

  async removePermission(permissions) {
    return await this.client.revokefrom({
      from: this.from,
      to: this.to,
      permissions
    })
  }
}
