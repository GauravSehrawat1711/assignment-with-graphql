import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqldatasourceDataSource} from '../datasources';
import {Order, OrderRelations, User} from '../models';
import {UserRepository} from './user.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.order_id,
  OrderRelations
> {

  public readonly userorder: BelongsToAccessor<User, typeof Order.prototype.order_id>;

  constructor(
    @inject('datasources.mysqldatasource') dataSource: MysqldatasourceDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Order, dataSource);
    this.userorder = this.createBelongsToAccessorFor('userorder', userRepositoryGetter,);
    this.registerInclusionResolver('userorder', this.userorder.inclusionResolver);
  }
}
