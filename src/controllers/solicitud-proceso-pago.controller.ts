import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Solicitud,
  ProcesoPago,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudProcesoPagoController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/proceso-pagos', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many ProcesoPago',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProcesoPago)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ProcesoPago>,
  ): Promise<ProcesoPago[]> {
    return this.solicitudRepository.procesoPagos(id).find(filter);
  }

  @post('/solicituds/{id}/proceso-pagos', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProcesoPago)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoPago, {
            title: 'NewProcesoPagoInSolicitud',
            exclude: ['id'],
            optional: ['solicitudId']
          }),
        },
      },
    }) procesoPago: Omit<ProcesoPago, 'id'>,
  ): Promise<ProcesoPago> {
    return this.solicitudRepository.procesoPagos(id).create(procesoPago);
  }

  @patch('/solicituds/{id}/proceso-pagos', {
    responses: {
      '200': {
        description: 'Solicitud.ProcesoPago PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoPago, {partial: true}),
        },
      },
    })
    procesoPago: Partial<ProcesoPago>,
    @param.query.object('where', getWhereSchemaFor(ProcesoPago)) where?: Where<ProcesoPago>,
  ): Promise<Count> {
    return this.solicitudRepository.procesoPagos(id).patch(procesoPago, where);
  }

  @del('/solicituds/{id}/proceso-pagos', {
    responses: {
      '200': {
        description: 'Solicitud.ProcesoPago DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ProcesoPago)) where?: Where<ProcesoPago>,
  ): Promise<Count> {
    return this.solicitudRepository.procesoPagos(id).delete(where);
  }
}
