/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule, UserModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
