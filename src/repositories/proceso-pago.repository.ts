import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {ProcesoPago, ProcesoPagoRelations} from '../models';

export class ProcesoPagoRepository extends DefaultCrudRepository<
  ProcesoPago,
  typeof ProcesoPago.prototype.id,
  ProcesoPagoRelations
> {
  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource,
  ) {
    super(ProcesoPago, dataSource);
  }
}
