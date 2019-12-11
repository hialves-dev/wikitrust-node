import Blockchain from './Blockchain'
import { createJsonStream } from '../utils/json'

export default class Stream extends Blockchain {
  constructor(data, info) {
    super()
    this.data = data
    this.info = info
  }

  async createStream() {
    const { stream, open, permissions } = this.info

    return await this.client.create({
      type: 'stream',
      name: stream,
      open,
      details: { permissions }
    })
  }

  async subscribeToStream() {
    const { stream } = this.info

    return await this.client.subscribe({ stream: stream })
  }

  async unsubscribeStream() {
    const { stream } = this.info

    return await this.client.unsubscribe({ stream: stream })
  }

  async publishToStream() {
    const { stream, key } = this.info
    const obj = createJsonStream(this.data)

    return await this.client.publish({
      stream: stream,
      key,
      data: { json: obj }
    })
  }

  async getDataKey() {
    const { stream, key } = this.info

    return await this.client.listStreamKeyItems({ stream: stream, key: key })
  }
}
