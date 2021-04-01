import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Pais} from './pais.model';
import {Proyecto} from './proyecto.model';
import {Cliente} from './cliente.model';

@model()
export class Ciudad extends Entity {
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
  codigo_ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_ciudad: string;

  @belongsTo(() => Pais)
  paisId: string;

  @hasMany(() => Proyecto)
  proyectos: Proyecto[];

  @hasMany(() => Cliente)
  clientes: Cliente[];

  constructor(data?: Partial<Ciudad>) {
    super(data);
  }
}

export interface CiudadRelations {
  // describe navigational properties here
}

export type CiudadWithRelations = Ciudad & CiudadRelations;
