import {Entity, model, property} from '@loopback/repository';

@model()
export class Bloque extends Entity {
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
  cod_bloque: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_bloque: string;

  @property({
    type: 'string',
    required: true,
  })
  desc_bloque: string;


  constructor(data?: Partial<Bloque>) {
    super(data);
  }
}

export interface BloqueRelations {
  // describe navigational properties here
}

export type BloqueWithRelations = Bloque & BloqueRelations;
