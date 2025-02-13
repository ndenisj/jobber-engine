import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Mutation(() => User, { name: 'createUser' })
    async createUser(
        @Args('createUserInput') createUserInput: CreateUserInput
    ) {
        return await this.usersService.createUser(createUserInput);
    }

    @Query(() => [User], { name: 'users' })
    async getUsers() {
        return await this.usersService.getUsers();
    }
}
