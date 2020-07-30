import { Greeter } from './deno-handlers/Greeter.ts'
import { Health, healthStatus, ServingStatus } from './deno-handlers/Health.ts'
import * as greeter from './deno-models/greeter_grpc_pb.d.ts'
import * as health from './deno-models/health_grpc_pb.d.ts'
import { grpc } from './deps.ts'
import logger from './logger.ts'

const PORT = 50051

const server: grpc.Server = new grpc.Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
})
server.addService(greeter.GreeterService, new Greeter())
server.addService(health.HealthService, new Health())
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure())
server.start()

logger.info('gRPC:Server', new Date().toDateString())

// Change service health status
healthStatus.set('greeter.Greeter', ServingStatus.NOT_SERVING)
