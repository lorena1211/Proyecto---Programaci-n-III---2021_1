import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  doc_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  tel_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave_usuario: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
