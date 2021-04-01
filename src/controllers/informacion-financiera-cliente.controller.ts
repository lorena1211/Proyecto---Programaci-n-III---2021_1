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
  InformacionFinanciera,
  Cliente,
} from '../models';
import {InformacionFinancieraRepository} from '../repositories';

export class InformacionFinancieraClienteController {
  constructor(
    @repository(InformacionFinancieraRepository) protected informacionFinancieraRepository: InformacionFinancieraRepository,
  ) { }

  @get('/informacion-financieras/{id}/cliente', {
    responses: {
      '200': {
        description: 'InformacionFinanciera has one Cliente',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cliente),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Cliente>,
  ): Promise<Cliente> {
    return this.informacionFinancieraRepository.cliente(id).get(filter);
  }

  @post('/informacion-financieras/{id}/cliente', {
    responses: {
      '200': {
        description: 'InformacionFinanciera model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cliente)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof InformacionFinanciera.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewClienteInInformacionFinanciera',
            exclude: ['id'],
            optional: ['informacionFinancieraId']
          }),
        },
      },
    }) cliente: Omit<Cliente, 'id'>,
  ): Promise<Cliente> {
    return this.informacionFinancieraRepository.cliente(id).create(cliente);
  }

  @patch('/informacion-financieras/{id}/cliente', {
    responses: {
      '200': {
        description: 'InformacionFinanciera.Cliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Partial<Cliente>,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.informacionFinancieraRepository.cliente(id).patch(cliente, where);
  }

  @del('/informacion-financieras/{id}/cliente', {
    responses: {
      '200': {
        description: 'InformacionFinanciera.Cliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.informacionFinancieraRepository.cliente(id).delete(where);
  }
}
