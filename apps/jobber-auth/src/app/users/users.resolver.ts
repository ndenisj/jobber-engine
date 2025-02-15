import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorators';
import { TokenPayload } from '../auth/interfaces/token-payload.interface';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.createUser(createUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [User], { name: 'users' })
  async getUsers(@CurrentUser() { userId }: TokenPayload) {
    console.log(userId);
    return await this.usersService.getUsers();
  }
}
