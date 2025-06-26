import { IsString } from 'class-validator';
import { User } from '../../../model/user.entity';

export class CreateHuntDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  user: User;
}
