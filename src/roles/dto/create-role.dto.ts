/* eslint-disable prettier/prettier */
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
}