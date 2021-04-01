import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Bloque, BloqueRelations, Inmueble, Proyecto} from '../models';
import {InmuebleRepository} from './inmueble.repository';
import {ProyectoRepository} from './proyecto.repository';

export class BloqueRepository extends DefaultCrudRepository<
  Bloque,
  typeof Bloque.prototype.id,
  BloqueRelations
> {

  public readonly proyecto: BelongsToAccessor<Proyecto, typeof Bloque.prototype.id>;

  public readonly inmuebles: HasManyRepositoryFactory<Inmueble, typeof Bloque.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('ProyectoRepository') protected proyectoRepositoryGetter: Getter<ProyectoRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>,
  ) {
    super(Bloque, dataSource);
    this.inmuebles = this.createHasManyRepositoryFactoryFor('inmuebles', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('inmuebles', this.inmuebles.inclusionResolver);
    this.proyecto = this.createBelongsToAccessorFor('proyecto', proyectoRepositoryGetter,);
    this.registerInclusionResolver('proyecto', this.proyecto.inclusionResolver);
  }
}
