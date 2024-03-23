const mongoose = require('mongoose');

task = {name: String,
    project: String,
    description: String,
    priority: String,
    status: String}

const projectSchema = new mongoose.Schema({
    projectName: String,
    projectId: String,
    tasks: any,
})

const task = mongoose.model("Task",taskSchema);
module.exports = task;