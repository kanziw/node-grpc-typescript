import { Server, ServerCredentials } from 'grpc'

import { Greeter, GreeterService } from './handlers/Greeter'
import { Health, HealthService, healthStatus, ServingStatus } from './handlers/Health'
import logger from './logger'

const PORT = 50051

const server: Server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
})
server.addService(GreeterService, new Greeter())
server.addService(HealthService, new Health())
server.bind(`0.0.0.0:${PORT}`, ServerCredentials.createInsecure())
server.start()

logger.info('gRPC:Server', new Date().toDateString())

// Change service health status
healthStatus.set('greeter.Greeter', ServingStatus.NOT_SERVING)
