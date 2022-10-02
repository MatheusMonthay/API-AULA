import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './shared/contas.service';

@Module({})
export class ContasModule {
  controllers: [ContasController];
  providers: [ContasService];
}
