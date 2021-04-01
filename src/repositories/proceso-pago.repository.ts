import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {ProcesoPago, ProcesoPagoRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class ProcesoPagoRepository extends DefaultCrudRepository<
  ProcesoPago,
  typeof ProcesoPago.prototype.id,
  ProcesoPagoRelations
> {

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof ProcesoPago.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(ProcesoPago, dataSource);
    this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
