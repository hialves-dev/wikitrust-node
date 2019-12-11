require('dotenv').config()
import Address from './src/models/Address'
import Permission from './src/models/Permission'
import Stream from './src/models/Stream'
import { data, info } from './src/data'

async function addressTest(ad) {
  try {
    const value = await ad.getMyAddress()
    console.log('Meu endereço: ', value)
  } catch (e) {
    console.log('Erro address', e)
  }
}

async function streamTest(stream) {
  try {
    const value = await stream.createStream()
    console.log('Create stream: ', value)
  } catch (e) {
    console.log('Erro stream: ', e)
  }

  try {
    const value = await stream.subscribeToStream()
    console.log('Subscribe: ', value)
  } catch (e) {
    console.log('Erro subscribe: ', e)
  }

  try {
    const value = await stream.publishToStream()
    console.log('Data Publish: ', value)
  } catch (e) {
    console.log('Erro publish: ', e)
  }

  try {
    const value = await stream.getDataKey()
    console.log('Data key: ', value)
  } catch (e) {
    console.log('Erro get data: ', e)
  }
}

async function permissionTest(permission) {
  try {
    const value = await permission.grantPermission({ permissions: 'write' })
    console.log('Grant Permission: ', value)
  } catch (e) {
    console.log('Erro grant permission: ', e)
  }

  try {
    const value = await permission.removePermission({ permissions: 'write' })
    console.log('Revoke Permission: ', value)
  } catch (e) {
    console.log('Erro grant permission: ', e)
  }
}

async function init() {
  let ad = new Address()
  await addressTest(ad)

  let stream = new Stream(data, info)
  await streamTest(stream)

  //let permission = new Permission(from, to)
}

init()
