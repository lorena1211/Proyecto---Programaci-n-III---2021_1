import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Cliente, ClienteRelations, InformacionFinanciera, Solicitud, Ciudad} from '../models';
import {InformacionFinancieraRepository} from './informacion-financiera.repository';
import {SolicitudRepository} from './solicitud.repository';
import {CiudadRepository} from './ciudad.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly informacionFinanciera: HasOneRepositoryFactory<InformacionFinanciera, typeof Cliente.prototype.id>;

  public readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof Cliente.prototype.id>;

  public readonly ciudad: BelongsToAccessor<Ciudad, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('InformacionFinancieraRepository') protected informacionFinancieraRepositoryGetter: Getter<InformacionFinancieraRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('CiudadRepository') protected ciudadRepositoryGetter: Getter<CiudadRepository>,
  ) {
    super(Cliente, dataSource);
    this.ciudad = this.createBelongsToAccessorFor('ciudad', ciudadRepositoryGetter,);
    this.registerInclusionResolver('ciudad', this.ciudad.inclusionResolver);
    this.solicitudes = this.createHasManyRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
    this.informacionFinanciera = this.createHasOneRepositoryFactoryFor('informacionFinanciera', informacionFinancieraRepositoryGetter);
    this.registerInclusionResolver('informacionFinanciera', this.informacionFinanciera.inclusionResolver);
  }
}
