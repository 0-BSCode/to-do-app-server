import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    name: String,
    finished: Boolean
})

const taskContent = mongoose.model("TaskContent", taskSchema);

export default taskContent;