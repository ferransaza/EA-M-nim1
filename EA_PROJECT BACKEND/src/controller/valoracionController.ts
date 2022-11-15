import Valoracion from '../model/Valoracion';
import User from '../model/User';
import { Request, Response } from 'express';


const add = async (req: Request, res: Response) => {
try {
	const { id, parking_id, username, points, data } = req.body;
    const newValoracion = new Valoracion({
		park_id: parking_id,
        points,
        date: data
	});

	await newValoracion.save();
	res.status(200).json({ auth: true });
	}
	catch (err) {
        res.status(400).json({ message: 'Error', err });
    }
};


const deleteVal = async (req: Request, res: Response) => {
	try {
		const _id = req.params.id;
		const valora = await Valoracion.findById(_id);
		if (!valora) {
			res.status(400).json({ message: 'Valoracion not found' });
		}
		await Valoracion.findByIdAndDelete(_id).catch(Error);
		await Valoracion.updateOne(
			{ _id },
			{ $pull: { myValoraciones: valora._id } }
		);
		res.status(200).json({ auth: true });
	}
	catch (err) {
		res.status(400).json({ message: 'Error', err });
	}
};

const getall = async (req: Request, res: Response) => {
	const Valoraciones1 = await Valoracion.find(); //
	res.json(Valoraciones1);
};

const getOne = async (req: Request, res: Response) => {
	try {
		const valoracion1 = await Valoracion.findById(req.params.id);
		res.json(valoracion1);
	}
	catch (err) {
		res.status(400).send({ message: 'Vloracion not found', err });
	}
}

const updatevaloracion = async (req: Request, res: Response) => {
	try {
		const _id = req.params.id;
		const { idparking, points, date } = req.body;
		const valoracion2 = await Valoracion.findByIdAndUpdate(_id, {
			idparking,
			points,
			date
		}, { new: true });
		res.status(200).json({ auth: true });
	}
	catch (err) {
		res.status(400).send({ message: 'Cannot update points', err });
	}
}

export default {
	add,
	deleteVal,
	getall,
	getOne,
	updatevaloracion
}