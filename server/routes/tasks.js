const Task = require("../models/task");
const express = require("express");
const router = express.Router();

// save new task todo
router.post("/", async (req, res) => {
    try {
        // https://mongoosejs.com/docs/documents.html#updating-using-save
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

// get all task todo
router.get("/", async (req, res) => {
    try {
        // https://docs.mongodb.com/manual/reference/method/db.collection.find/
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

// update task todo
router.put("/:id", async (req, res) => {
    try {
        // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

// delete task todo
router.delete("/:id", async (req, res) => {
    try {
        // https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
