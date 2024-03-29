import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private userSrv: UsersService) {
  }
  @Post()
  createUser(@Body() dto:CreateUserDto){
    return this.userSrv.createUser(dto);
  }

  @Get()
  getAllUsers(){
    return this.userSrv.getAllUsers();
  }
}
