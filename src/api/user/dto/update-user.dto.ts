import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { UserType } from '../../../enum/user-type.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  userName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEnum(UserType)
  role?: UserType;
}
