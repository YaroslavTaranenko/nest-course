import { Body, Controller, Get, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
  constructor(private rolesSrv: RolesService) {}

  @Get()
  showAll(){
    return this.rolesSrv.showRoles();
  }

  @Post()
  createRole(@Body() dto: CreateRoleDto){
    return this.rolesSrv.createRole(dto);
  }
  @Post('find')
  findByName(@Body() body: any){
    return this.rolesSrv.getByName(body.code);
  }

}
