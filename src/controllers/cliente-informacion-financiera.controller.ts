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
  Cliente,
  InformacionFinanciera,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteInformacionFinancieraController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/informacion-financiera', {
    responses: {
      '200': {
        description: 'Cliente has one InformacionFinanciera',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InformacionFinanciera),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<InformacionFinanciera>,
  ): Promise<InformacionFinanciera> {
    return this.clienteRepository.informacionFinanciera(id).get(filter);
  }

  @post('/clientes/{id}/informacion-financiera', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(InformacionFinanciera)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformacionFinanciera, {
            title: 'NewInformacionFinancieraInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) informacionFinanciera: Omit<InformacionFinanciera, 'id'>,
  ): Promise<InformacionFinanciera> {
    return this.clienteRepository.informacionFinanciera(id).create(informacionFinanciera);
  }

  @patch('/clientes/{id}/informacion-financiera', {
    responses: {
      '200': {
        description: 'Cliente.InformacionFinanciera PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformacionFinanciera, {partial: true}),
        },
      },
    })
    informacionFinanciera: Partial<InformacionFinanciera>,
    @param.query.object('where', getWhereSchemaFor(InformacionFinanciera)) where?: Where<InformacionFinanciera>,
  ): Promise<Count> {
    return this.clienteRepository.informacionFinanciera(id).patch(informacionFinanciera, where);
  }

  @del('/clientes/{id}/informacion-financiera', {
    responses: {
      '200': {
        description: 'Cliente.InformacionFinanciera DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(InformacionFinanciera)) where?: Where<InformacionFinanciera>,
  ): Promise<Count> {
    return this.clienteRepository.informacionFinanciera(id).delete(where);
  }
}
