/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Body, 
    Param, 
    Delete } from '@nestjs/common';

import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';


@Controller('roles')
export class RolesController {
    constructor(private readonly roleService: RolesService) {}

    @Post()
    create(Body() createRoleDto: CreateRoleDto) {
        return this.roleService.create();
    }

    @Get()
    findAll() {
        return this.roleService.findAll();
    }

    @Get(':id')
    findOne(param('id') id: string) {
        return this.roleService.findOne();    
    }

    @Delete(':id')
    remove(Param('id') id: string) {
        this.roleService.remove();
    }
}
