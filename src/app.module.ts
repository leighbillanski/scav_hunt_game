import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './api/user/user.module';
import { HuntModule } from './api/hunt/hunt.module';
import { RiddleModule } from './api/riddle/riddle.module';
import { QrCodeModule } from './api/qr-code/qr-code.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d1db8f3uibrs73fjsgq0-a',
      port: 5432,
      username: 'scav_hunt_game_user',
      password: 'jCSrvjGV5NIiVZpQX5RyhhRQPFJFmuWa',
      database: 'scav_hunt_game',
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    HuntModule,
    RiddleModule,
    QrCodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
