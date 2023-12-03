/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RolesModule } from './roles/roles.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [ UserModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
