import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Ciudad} from './ciudad.model';
import {Bloque} from './bloque.model';

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

  @belongsTo(() => Ciudad)
  ciudadId: string;

  @hasMany(() => Bloque)
  bloques: Bloque[];

  constructor(data?: Partial<Proyecto>) {
    super(data);
  }
}

export interface ProyectoRelations {
  // describe navigational properties here
}

export type ProyectoWithRelations = Proyecto & ProyectoRelations;
