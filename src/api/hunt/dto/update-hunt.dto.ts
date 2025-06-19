import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateHuntDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  description?: string;
}
