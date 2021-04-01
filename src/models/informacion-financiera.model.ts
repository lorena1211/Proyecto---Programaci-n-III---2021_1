import {Entity, model, property, hasOne} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class InformacionFinanciera extends Entity {
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
  datos_trabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  tiempo_trab_act: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_ref_fam: string;

  @property({
    type: 'string',
    required: true,
  })
  tel_ref_fam: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_ref_per: string;

  @property({
    type: 'string',
    required: true,
  })
  tel_ref_per: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @hasOne(() => Cliente)
  cliente: Cliente;

  constructor(data?: Partial<InformacionFinanciera>) {
    super(data);
  }
}

export interface InformacionFinancieraRelations {
  // describe navigational properties here
}

export type InformacionFinancieraWithRelations = InformacionFinanciera & InformacionFinancieraRelations;
