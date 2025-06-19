import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hunt } from '../../model/hunt.entity';
import { CreateHuntDto } from './dto/create-hunt.dto';
import { UpdateHuntDto } from './dto/update-hunt.dto';

@Injectable()
export class HuntService {
  constructor(
    @InjectRepository(Hunt)
    private readonly huntRepository: Repository<Hunt>,
  ) {}

  getAllHuntsPerUser(username: string): Promise<Hunt[]> {
    return this.huntRepository.find({
      where: { user: { userName: username } },
    });
  }
  async getHuntById(id: number): Promise<Hunt> {
    const hunt = await this.huntRepository.findOne({ where: { id } });
    if (!hunt) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return hunt;
  }

  async createHunt(createHuntDto: CreateHuntDto): Promise<Hunt> {
    const neHunt = this.huntRepository.create(createHuntDto);
    return this.huntRepository.save(neHunt);
  }

  async updateHunt(id: number, updateHuntDto: UpdateHuntDto): Promise<Hunt> {
    const hunt = await this.getHuntById(id);
    const updatedHunt = Object.assign(hunt, updateHuntDto);
    return this.huntRepository.save(updatedHunt);
  }

  async deleteHunt(id: number): Promise<void> {
    const hunt = await this.getHuntById(id);
    await this.huntRepository.remove(hunt);
  }
}
