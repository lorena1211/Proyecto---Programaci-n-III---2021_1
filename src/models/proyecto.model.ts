import {Entity, model, property} from '@loopback/repository';

@model()
export class Proyecto extends Entity {
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
  cod_proyecto: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_proyecto: string;

  @property({
    type: 'string',
    required: true,
  })
  desc_proyecto: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen_proyecto: string;


  constructor(data?: Partial<Proyecto>) {
    super(data);
  }
}

export interface ProyectoRelations {
  // describe navigational properties here
}

export type ProyectoWithRelations = Proyecto & ProyectoRelations;
