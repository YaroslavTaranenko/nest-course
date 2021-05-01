import { HttpException, HttpService, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private rolesService: RolesService) {
  }
  async createUser(dto: CreateUserDto){
    try {
      const user = await this.userRepository.create(dto);
      const role = await this.rolesService.getByName('USER');
      await user.$set('roles', [role.id]);
      return user;
    }catch (e){
      console.log(e);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllUsers(){
    const users = await this.userRepository.findAll({include: {all:true}});
    return users;
  }
}
