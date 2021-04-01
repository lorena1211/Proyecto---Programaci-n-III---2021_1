import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {InformacionFinanciera, InformacionFinancieraRelations, Cliente} from '../models';
import {ClienteRepository} from './cliente.repository';

export class InformacionFinancieraRepository extends DefaultCrudRepository<
  InformacionFinanciera,
  typeof InformacionFinanciera.prototype.id,
  InformacionFinancieraRelations
> {

  public readonly cliente: HasOneRepositoryFactory<Cliente, typeof InformacionFinanciera.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(InformacionFinanciera, dataSource);
    this.cliente = this.createHasOneRepositoryFactoryFor('cliente', clienteRepositoryGetter);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
