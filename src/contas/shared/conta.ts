import { Document } from 'mongoose';
export class Conta extends Document {
  descricao: string;
  valor: number;
  pago: boolean;
}
