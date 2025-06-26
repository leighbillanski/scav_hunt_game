import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RiddleService } from './riddle.service';
import { CreateRiddleDto } from './dto/create-riddle.dto';
import { UpdateRiddleDto } from './dto/update-riddle.dto';

@Controller('riddle')
export class RiddleController {
  constructor(private userService: RiddleService) {}
  @Get('/hunt/:hunt')
  getAllHunts(@Param('hunt') huntId: number) {
    return this.userService.getAllRiddlesPerHunt(huntId);
  }

  @Get(':id')
  getHUntById(@Param('id') id: number) {
    return this.userService.getRiddleById(id);
  }

  @Post()
  createUser(@Body() createHuntDto: CreateRiddleDto) {
    return this.userService.createRiddle(createHuntDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateHuntUserDto: UpdateRiddleDto,
  ) {
    return this.userService.updateRiddle(id, updateHuntUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteRiddle(id);
  }
}
