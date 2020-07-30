import { StringValue } from 'google-protobuf/google/protobuf/wrappers_pb'
import { Metadata } from 'grpc'
import { HelloRequest, HelloResponse } from '../models/greeter_pb'
import { clientService } from './clientService'
import logger from './logger'

let [ argvName, argvNickname ] = [ 'world', '' ]
if (process.argv.length >= 3) {
  [ , , argvName, argvNickname ] = process.argv
}

const param: HelloRequest = new HelloRequest()
param.setName(argvName)

if (argvNickname) {
  const nickname = new StringValue()
  nickname.setValue(argvNickname)
  param.setNickname(nickname)
}

const metadata: Metadata = new Metadata()
metadata.add('foo', 'bar1')
metadata.add('foo', 'bar2')

async function run(): Promise<void> {
  /**
   * rpc sayHello with Metadata
   */
  const sayHelloWithMetadata: HelloResponse = await clientService.sayHello(param, metadata)
  logger.info('sayHelloWithMetadata', sayHelloWithMetadata.getMessage())
}

run().catch((err: Error) => logger.error(err))
