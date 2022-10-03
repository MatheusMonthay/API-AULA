import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasController } from './contas/contas.controller';
import { ContasService } from './contas/shared/contas.service';
import { ContasModule } from './contas/contas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.6j9gf9n.mongodb.net/?retryWrites=true&w=majority',
    ),
    ContasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
