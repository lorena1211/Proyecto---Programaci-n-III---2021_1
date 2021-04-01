import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, ProcesoPago, Inmueble, Cliente} from '../models';
import {ProcesoPagoRepository} from './proceso-pago.repository';
import {InmuebleRepository} from './inmueble.repository';
import {ClienteRepository} from './cliente.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly procesoPagos: HasManyRepositoryFactory<ProcesoPago, typeof Solicitud.prototype.id>;

  public readonly inmueble: BelongsToAccessor<Inmueble, typeof Solicitud.prototype.id>;

  public readonly cliente: BelongsToAccessor<Cliente, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('ProcesoPagoRepository') protected procesoPagoRepositoryGetter: Getter<ProcesoPagoRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Solicitud, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.inmueble = this.createBelongsToAccessorFor('inmueble', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmueble', this.inmueble.inclusionResolver);
    this.procesoPagos = this.createHasManyRepositoryFactoryFor('procesoPagos', procesoPagoRepositoryGetter,);
    this.registerInclusionResolver('procesoPagos', this.procesoPagos.inclusionResolver);
  }
}
