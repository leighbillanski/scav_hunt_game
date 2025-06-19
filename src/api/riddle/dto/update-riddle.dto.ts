import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateRiddleDto {
  @IsOptional()
  @IsString()
  riddleText?: string;

  @IsOptional()
  @IsNumber()
  sequence?: number;
}
