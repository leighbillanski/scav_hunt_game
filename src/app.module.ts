import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Hunt } from './model/hunt.entity';
import { Riddle } from './model/riddle.entity';
import { QrCode } from './model/qr-code.entity';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hunt.db',
      entities: [User, Hunt, Riddle, QrCode],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
