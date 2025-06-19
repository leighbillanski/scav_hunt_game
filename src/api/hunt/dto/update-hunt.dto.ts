import { IsString, IsOptional } from 'class-validator';

export class UpdateHuntDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
