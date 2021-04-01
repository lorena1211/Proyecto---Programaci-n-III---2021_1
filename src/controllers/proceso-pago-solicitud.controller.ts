import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProcesoPago,
  Solicitud,
} from '../models';
import {ProcesoPagoRepository} from '../repositories';

export class ProcesoPagoSolicitudController {
  constructor(
    @repository(ProcesoPagoRepository)
    public procesoPagoRepository: ProcesoPagoRepository,
  ) { }

  @get('/proceso-pagos/{id}/solicitud', {
    responses: {
      '200': {
        description: 'Solicitud belonging to ProcesoPago',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async getSolicitud(
    @param.path.number('id') id: typeof ProcesoPago.prototype.id,
  ): Promise<Solicitud> {
    return this.procesoPagoRepository.solicitud(id);
  }
}
