import {Entity, model, property} from '@loopback/repository';

@model()
export class Cliente extends Entity {
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
  doc_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  ape_cliente: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_nac_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  foto_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  cel_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  email_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  dir_cliente: string;


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
