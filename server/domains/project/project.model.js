// Importando Moongose
import mongoose from 'mongoose';
// Desestructurando un generador de Schemas de mongoose
const { Schema } = mongoose;

// Creando el esquema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Exportando la compilación de ProjectSchema
// en un modelo mongoose
export default mongoose.model('project', ProjectSchema);
