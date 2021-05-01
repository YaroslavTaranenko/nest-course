import { Body, Get, Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private rolesRepository: typeof Role) {}

  async showRoles(){
    const roles = await this.rolesRepository.findAll();
    return roles;
  }

  async createRole(dto: CreateRoleDto){
    const role = await this.rolesRepository.create(dto);
    return role;
  }

  async getByName(code: string){
    const role = await this.rolesRepository.findOne({where:{code}});
    return role;
  }
}
