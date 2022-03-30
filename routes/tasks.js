import express from 'express';
import {fetchTasks, addTask, deleteTask, updateTask} from '../controllers/tasks.js';

const router = express.Router();

router.get('/', fetchTasks);
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;