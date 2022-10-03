import * as mongoose from 'mongoose';

export const ContaSchema = new mongoose.Schema({
  descricao: String,
  valor: Number,
  pago: Boolean,
});
