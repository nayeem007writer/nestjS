/* eslint-disable prettier/prettier */
import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import { User } from '../../user/database_entities/user.entities';

import { UserRole } from "src/user/database_entities/user.role.entities";

@Table
export class Role extends Model {
    @Column
    name: string;

    @BelongsToMany(() => User, () => UserRole)
    users: User[];
}