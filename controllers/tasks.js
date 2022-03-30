import TaskContent from '../models/taskContent.js';
import mongoose from 'mongoose';

export const fetchTasks = async (req, res) => {
    try {
        const allTasks = await TaskContent.find();
        res.status(200).json(allTasks);
    } catch(e) {
        res.status(404).json({message: e.message});
    }
}

export const addTask = async (req, res) => {
    console.log("Hello from controllers!");
    const task = req.body;
    const newTask = new TaskContent(task);

    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

export const deleteTask = async (req, res) => {
    const {id: _id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No task with that id!");

    await TaskContent.findByIdAndDelete(_id);

    res.json({message: "Task deleted successfully!"});
}

export const updateTask = async (req, res) => {
    const {id: _id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No task with that id!");

    const task = await TaskContent.findById(_id);
    const updatedTask = await TaskContent.findByIdAndUpdate(_id, {finished: !task.finished}, {new: true});
    res.json(updatedTask);
}