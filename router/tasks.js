
const express = require('express');
const router = express.Router();
const task = require('../models/task');

router.get('/api/tasks', async (req, res) => {
    const tasks = await task.find();
    res.json(tasks)
})

router.get('/api/tasks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const task = await task.findOne({ taskId: id });
        res.json(task)
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.post('/api/tasks', async (req, res) => {
    const body = req.body;
    try {
        const tasks = await task.create(body)
        res.send({ success: true })
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.delete('/api/tasks/: id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTask = await task.deleteOne({ taskId: id });

        if (deletedTask.deletedCount === 1) {
            res.json({ success: true, message: 'Task deleted successfully' })
        }
        else {
            res.status(404).json({ success: false, message: 'Task not found' })
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.put("/api/tasks/:id",async  (req, res) => {
    const id = req.params.id;
    const updatedTaskData = req.body;
    try {
        const updatedTask = await task.findOneAndUpdate({ taskId: id }, updatedData, { new: true });
        res.json({ success: true, task: updatedTask })
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error ' });
    }
})

module.exports = router;