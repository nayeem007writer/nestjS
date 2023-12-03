/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { 
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,

} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./database_entities/user.entities";
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ){}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    try{

        createUserDto.password = bcrypt.hashSync(createUserDto.password, 8);

        const user = await this.userModel.create({...createUserDto,});

        return user;

    }
    catch (err) {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}