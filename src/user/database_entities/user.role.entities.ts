/* eslint-disable prettier/prettier */
import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

import { Role } from "../../roles/role_entities/role.entities";

import { User } from "./user.entities";

@Table
export  class UserRole extends Model {

    @BelongsTo(()=> User)
    user: User;

    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId: number;

    @BelongsTo(() => Role)
    role: Role;

    @ForeignKey(() => Role)
    @PrimaryKey
    @Column
    roleID: number;
}