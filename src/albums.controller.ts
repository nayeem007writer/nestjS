/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('/albums')
export class AlbumsController {

    @Get()
    getProfile(){
        return "albums controller";
    }
}