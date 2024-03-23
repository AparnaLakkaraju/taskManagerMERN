const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskId: Number,
    name: String,
    project: String,
    description: String,
    priority: String,
    status: String
})

const task = mongoose.model("Task",taskSchema);
module.exports = task;