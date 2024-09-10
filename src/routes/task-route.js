const express = require("express");
const TaskRoute = express.Router();
const { createTaskController, getAllTasksController, updateTaskController } = require('../controller/task-controller');

TaskRoute.post("/", createTaskController);
TaskRoute.get("/", getAllTasksController);
TaskRoute.put("/", updateTaskController);

module.exports = TaskRoute;