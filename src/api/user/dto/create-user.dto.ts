import { IsString, IsEmail, IsEnum } from 'class-validator';
import { UserType } from '../../../enum/user-type.enum';

export class CreateUserDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(UserType)
  role: UserType;
}
