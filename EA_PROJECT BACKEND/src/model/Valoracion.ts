import { Schema, model } from 'mongoose';
const Valoracion = new Schema({
    park_id: { type: String, required: true },
	points: {type: Number},
	date: { type: Date, required: true }
});
export default model('Valoracion', Valoracion);