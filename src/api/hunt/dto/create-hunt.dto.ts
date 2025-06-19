import { IsString, IsEmail } from 'class-validator';
import { User } from '../../../model/user.entity';

export class CreateHuntDto {
  @IsString()
  name: string;

  @IsEmail()
  description: string;

  @IsString()
  user: User;
}
