/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  surname: string;

  @Column
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column
  password: string;
}
