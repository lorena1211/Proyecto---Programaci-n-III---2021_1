import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {ProcesoPago} from './proceso-pago.model';
import {Inmueble} from './inmueble.model';
import {Cliente} from './cliente.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  est_solicitud: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  oferta_eco: string;

  @hasMany(() => ProcesoPago)
  procesoPagos: ProcesoPago[];

  @belongsTo(() => Inmueble)
  inmuebleId: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
