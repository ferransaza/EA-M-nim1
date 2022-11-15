import valoracionController from '../controller/valoracionController';
import { Router } from 'express';

const router = Router();

router.post('/', valoracionController.add); // OK
router.delete('/:id', valoracionController.deleteVal); // OK
router.get('/', valoracionController.getall); // OK
router.put('/updateval/:id', valoracionController.updatevaloracion); // OK
router.get('/:id', valoracionController.getOne); // OK