import { credentials, Metadata } from 'grpc'

import { GreeterClient } from '../models/greeter_grpc_pb'
import { HelloRequest, HelloResponse } from '../models/greeter_pb'

/**
 * gRPC GreeterClient Service
 */
class ClientService {
  private readonly client: GreeterClient = new GreeterClient('localhost:50051', credentials.createInsecure())

  public sayHello(param: HelloRequest, metadata: Metadata = new Metadata()): Promise<HelloResponse> {
    return new Promise<HelloResponse>((resolve, reject): void => {
      this.client.sayHello(param, metadata, (err, res) => (
        err ? reject(err) : resolve(res)
      ))
    })
  }
}

export const clientService: ClientService = new ClientService()
