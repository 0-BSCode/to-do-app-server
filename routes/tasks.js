import express from 'express';
import {addTask, deleteTask, updateTask} from '../controllers/tasks.js';

const router = express.Router();

router.post('/', addTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;