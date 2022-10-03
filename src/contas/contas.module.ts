import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContasController } from './contas.controller';
import { ContasService } from './shared/contas.service';
import { ContaSchema } from './schemas/conta.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Conta', schema: ContaSchema }]),
  ],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
