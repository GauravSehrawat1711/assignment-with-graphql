import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  order_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  item: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @belongsTo(() => User, {name: 'userorder'})
  id: number;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
