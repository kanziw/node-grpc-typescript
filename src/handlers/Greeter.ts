import { MetadataValue, sendUnaryData, ServerUnaryCall, ServiceError, status } from 'grpc'

import { GreeterService, IGreeterServer } from '../../models/greeter_grpc_pb'
import { HelloRequest, HelloResponse } from '../../models/greeter_pb'
import logger from '../logger'

const InvalidValueError = (code: status, message: string): ServiceError => ({
  name: 'InvalidValue',
  code,
  message,
})

/**
 * package greeter
 * service Greeter
 */
class Greeter implements IGreeterServer {
  /**
   * Implements the SayHello RPC method.
   */
  public sayHello(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloResponse>): void {
    logger.info('sayHello:', { request: call.request.toObject(), metadata: call.metadata.getMap() })

    const res: HelloResponse = new HelloResponse()
    const name = call.request.getNickname()?.getValue() ?? call.request.getName()

    if (name === 'error') {
      callback(InvalidValueError(status.INVALID_ARGUMENT, `invalid value: ${name}`), null)
      return
    }

    const metadataValue: MetadataValue[] = call.metadata.get('foo')
    res.setMessage(`Hello ${name}?${metadataValue.length ? ` w/ metadata: ${metadataValue}` : ''}`)

    callback(null, res)
  }
}

export {
  Greeter,
  GreeterService,
}
