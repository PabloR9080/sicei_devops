import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { AlumnoController } from './alumno/alumno.controller';
import 'reflect-metadata';

@Module({
  imports: [AlumnoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
