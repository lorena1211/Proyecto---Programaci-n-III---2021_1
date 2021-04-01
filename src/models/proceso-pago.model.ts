import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class ProcesoPago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  comprobante_pago: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: string;

  @belongsTo(() => Solicitud)
  solicitudId: string;

  constructor(data?: Partial<ProcesoPago>) {
    super(data);
  }
}

export interface ProcesoPagoRelations {
  // describe navigational properties here
}

export type ProcesoPagoWithRelations = ProcesoPago & ProcesoPagoRelations;
