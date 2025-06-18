import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../enum/user-type.enum';
import { Hunt } from './hunt.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'USER_NAME', unique: true })
  userName: string;

  @Column({ name: 'EMAIL', unique: true })
  email: string;

  @Column({ name: 'PASSWORD' })
  password: string;

  @Column({
    name: 'ROLE',
    type: 'enum',
    enum: UserType,
    default: UserType.HUNTER,
  })
  role: string;

  @OneToMany(() => Hunt, (hunt) => hunt.user)
  hunts: Hunt[];
}
