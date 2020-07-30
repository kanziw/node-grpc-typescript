import * as greeter from '../deno-models/greeter_grpc_pb.d.ts'
import * as greeterPb from '../deno-models/greeter_pb.d.ts'
import { grpc } from '../deps.ts'
import logger from '../logger.ts'

const InvalidValueError = (code: grpc.status, message: string): grpc.ServiceError => ({
  name: 'InvalidValue',
  code,
  message,
})

/**
 * package greeter
 * service Greeter
 */
class Greeter implements greeter.IGreeterServer {
  /**
   * Implements the SayHello RPC method.
   */
  public sayHello(call: grpc.ServerUnaryCall<greeterPb.HelloRequest>, callback: grpc.sendUnaryData<greeterPb.HelloResponse>): void {
    logger.info('sayHello:', { request: call.request.toObject(), metadata: call.metadata.getMap() })

    const res: greeterPb.HelloResponse = new greeterPb.HelloResponse()
    const name = call.request.getNickname()?.getValue() ?? call.request.getName()

    if (name === 'error') {
      callback(InvalidValueError(grpc.status.INVALID_ARGUMENT, `invalid value: ${name}`), null)
      return
    }

    const metadataValue: grpc.MetadataValue[] = call.metadata.get('foo')
    res.setMessage(`Hello ${name}?${metadataValue.length ? ` w/ metadata: ${metadataValue}` : ''}`)

    callback(null, res)
  }
}

export {
  Greeter,
}
