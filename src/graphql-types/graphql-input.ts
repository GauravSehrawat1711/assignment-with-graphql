import {IsEmail, Length} from 'class-validator';
import {Field, InputType} from 'type-graphql';
@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 225)
  firstName: string;
  @Field()
  @IsEmail()
  email: string;
}
