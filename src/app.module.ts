import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule.register(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
