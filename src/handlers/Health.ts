import { sendUnaryData, ServerUnaryCall, ServiceError, status } from 'grpc'

import { HealthService, IHealthServer } from '../../models/health_grpc_pb'
import { HealthCheckRequest, HealthCheckResponse } from '../../models/health_pb'

const { ServingStatus } = HealthCheckResponse
const healthStatus: Map<string, HealthCheckResponse.ServingStatus> = new Map(Object.entries({
  '': ServingStatus.SERVING,
  'greeter.Greeter': ServingStatus.SERVING,
}))

const NotFoundError = (code: status, message: string): ServiceError => ({
  name: 'NotFound',
  code,
  message,
})

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class Health implements IHealthServer {
  public check(call: ServerUnaryCall<HealthCheckRequest>, callback: sendUnaryData<HealthCheckResponse>): void {
    const service: string = call.request.getService()

    if (!healthStatus.has(service)) {
      return callback(NotFoundError(status.NOT_FOUND, 'NotFoundService'), null)
    }

    const res: HealthCheckResponse = new HealthCheckResponse()
    res.setStatus(healthStatus.get(service) ?? ServingStatus.UNKNOWN)

    callback(null, res)
  }
}

export {
  Health,
  HealthService,
  healthStatus,
  ServingStatus,
}
