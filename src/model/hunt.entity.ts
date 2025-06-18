import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Riddle } from './riddle.entity';

@Entity()
export class Hunt {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NAME' })
  name: string;

  @Column({ name: 'DESCRIPTION' })
  description: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'USER_ID', referencedColumnName: 'id' })
  user: User;

  @OneToMany(() => Riddle, (riddle) => riddle.hunt)
  riddles: Riddle[];
}
