import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Conta } from './shared/conta';
import { ContasService } from './shared/contas.service';

@Controller('contas')
export class ContasController {
  constructor(private contasService: ContasService) {}
  @Get()
  async getAll(): Promise<Conta[]> {
    return this.contasService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Conta> {
    return this.contasService.getById(id);
  }
  @Post()
  async create(@Body() conta: Conta): Promise<Conta> {
    return this.contasService.create(conta);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() conta: Conta): Promise<Conta> {
    return this.contasService.update(id, conta);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.contasService.delete(id);
  }
}
