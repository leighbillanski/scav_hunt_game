import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HuntService } from './hunt.service';
import { Hunt } from '../../model/hunt.entity';
import { CreateHuntDto } from './dto/create-hunt.dto';
import { UpdateHuntDto } from './dto/update-hunt.dto';

@Controller('users')
export class HuntController {
  constructor(private userService: HuntService) {}
  @Get(':user')
  getAllHunts(@Param('user') user: string): Promise<Hunt[]> {
    return this.userService.getAllHuntsPerUser(user);
  }

  @Get(':id')
  getHUntById(@Param('id') id: number) {
    return this.userService.getHuntById(id);
  }

  @Post()
  createUser(@Body() createHuntDto: CreateHuntDto) {
    return this.userService.createHunt(createHuntDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateHuntUserDto: UpdateHuntDto,
  ) {
    return this.userService.updateHunt(id, updateHuntUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteHunt(id);
  }
}
