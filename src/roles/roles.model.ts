import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreateAttrs{
  code: string;
  description: string;
}

@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreateAttrs>{
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  code: string;

  @Column({type: DataType.STRING, allowNull: true})
  description: string;

  @BelongsToMany(()=>User, ()=>UserRoles)
  users: User[];
}