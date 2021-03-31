import {Entity, model, property} from '@loopback/repository';

@model()
export class Pais extends Entity {
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
  codigo_pais: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_pais: string;


  constructor(data?: Partial<Pais>) {
    super(data);
  }
}

export interface PaisRelations {
  // describe navigational properties here
}

export type PaisWithRelations = Pais & PaisRelations;
