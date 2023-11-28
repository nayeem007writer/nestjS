/* eslint-disable prettier/prettier */
import { Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {

    @Post('/profile')
    @HttpCode(HttpStatus.OK)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getProfile(@Req() req: Request){
        return "hello tanim";
    }
}
