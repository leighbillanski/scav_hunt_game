import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRiddleDto } from './dto/create-riddle.dto';
import { UpdateRiddleDto } from './dto/update-riddle.dto';
import { Riddle } from '../../model/riddle.entity';

@Injectable()
export class RiddleService {
  constructor(
    @InjectRepository(Riddle)
    private readonly huntRepository: Repository<Riddle>,
  ) {}

  getAllRiddlesPerHunt(hunt: number): Promise<Riddle[]> {
    return this.huntRepository.find({
      where: { hunt: { id: hunt } },
    });
  }
  async getRiddleById(id: number): Promise<Riddle> {
    const riddle = await this.huntRepository.findOne({ where: { id } });
    if (!riddle) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return riddle;
  }

  async createRiddle(createRiddleDto: CreateRiddleDto): Promise<Riddle> {
    const newRiddle = this.huntRepository.create(createRiddleDto);
    return this.huntRepository.save(newRiddle);
  }

  async updateRiddle(
    id: number,
    updateRiddleDto: UpdateRiddleDto,
  ): Promise<Riddle> {
    const riddle = await this.getRiddleById(id);
    const updatedRiddle = Object.assign(riddle, updateRiddleDto);
    return this.huntRepository.save(updatedRiddle);
  }

  async deleteRiddle(id: number): Promise<void> {
    const riddle = await this.getRiddleById(id);
    await this.huntRepository.remove(riddle);
  }
}
