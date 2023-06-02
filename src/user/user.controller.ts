import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
        return {
            ...createUser,
            password: undefined,
        };
    }
}