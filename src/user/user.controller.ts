/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @post()
    create(@Body() createUserDto:CreateUserDto) {
        this.userService.create(createUserDto);
    }
}
