import {field, ID, objectType} from '@loopback/graphql';
import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model';

// import {Order} from './order.model';

// import {type} from 'os';

@model()
@objectType()
export class User extends Entity {
  @field(type => ID)
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @field(type => String)
  @property({
    type: 'string',
    required: true,
  })
  name: string;
  @field(type => String)
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @hasMany(() => Order, {keyTo: 'id'})
  orders: Order[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
