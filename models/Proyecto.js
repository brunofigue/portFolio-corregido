import mongoose from 'mongoose';

const proyectoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

export default Proyecto;
