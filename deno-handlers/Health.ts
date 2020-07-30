import * as health from '../deno-models/health_grpc_pb.d.ts'
import * as healthPb from '../deno-models/health_pb.d.ts'
import { grpc } from '../deps.ts'

const { ServingStatus } = healthPb.HealthCheckResponse
const healthStatus: Map<string, healthPb.HealthCheckResponse.ServingStatus> = new Map(Object.entries({
  '': ServingStatus.SERVING,
  'greeter.Greeter': ServingStatus.SERVING,
}))

const NotFoundError = (code: grpc.status, message: string): grpc.ServiceError => ({
  name: 'NotFound',
  code,
  message,
})

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class Health implements health.IHealthServer {
  public check(call: grpc.ServerUnaryCall<healthPb.HealthCheckRequest>, callback: grpc.sendUnaryData<healthPb.HealthCheckResponse>): void {
    const service: string = call.request.getService()

    if (!healthStatus.has(service)) {
      return callback(NotFoundError(grpc.status.NOT_FOUND, 'NotFoundService'), null)
    }

    const res: healthPb.HealthCheckResponse = new healthPb.HealthCheckResponse()
    res.setStatus(healthStatus.get(service) ?? ServingStatus.UNKNOWN)

    callback(null, res)
  }
}

export {
  Health,
  healthStatus,
  ServingStatus,
}
