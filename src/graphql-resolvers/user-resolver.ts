import {Arg, mutation, query, resolver} from '@loopback/graphql';
import {repository} from '@loopback/repository';
import {User} from '../models/user.model';
import {UserRepository} from '../repositories';
@resolver(of => User)
export class UserResolver {
  constructor(
    @repository('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  @query(() => [User])
  async user() {
    const user = await this.userRepo.find();
    console.log(user);

    return user;
  }
  @query(() => String)
  async hello() {
    return 'hello world';
  }
  @mutation(() => User)
  async register(
    @Arg('name') name: string,
    @Arg('email') email: string,
  ): Promise<User> {
    const newUser = await this.userRepo.create({
      name,
      email,
    });
    return newUser;
  }
}
