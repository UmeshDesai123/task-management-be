// const { default: RedisClient } = require("@redis/client/dist/lib/client");
const { createNewTask, getAllTasks, updateTask } = require("../repository/task-repository");
const { taskDataValidation } = require("../utils/taskValidation");
// const { redisClient } = require('../index');

const createTaskController = async (req, res) => {
  const { title, description } = req.body;
  //data validation
  try {
    await taskDataValidation({ title, description });
  } catch (error) {
    return res.status(400).send({
      error: error.message || error
    });
  }
  try {
    // console.log(req.body)
    const newTask = await createNewTask({
      title,
      description,
    });

    // Clear the cache
    // await redisClient.del('tasks');

    res.status(201).send(newTask);
  } catch (error) {
    console.log(error.message);
    if (error.message.includes('state validation failed')) {
      return res.status(400).send({
        error: "state should be either'completed' or 'pending'"
      });
    }
    return res.status(500).send({
      error: error.message || error
    });
  }
}

const getAllTasksController = async (req, res) => {
  try {
    // const cachedTasks = await redisClient.get('tasks');

    // if (cachedTasks) {
    //   console.log('Fetching from cache');
    //   return res.status(200).json(JSON.parse(cachedTasks));
    // }
    // console.log('Fetching from database');
    const tasks = await getAllTasks();
    
    // Store the result in Redis cache
    // await redisClient.setex('tasks', 60, JSON.stringify(tasks));

    return res.send(tasks);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: error.message || error
    });
  }
}

const updateTaskController = async (req, res) => {
  try {
    if (!req.body.id || !req.body.status) {
      return res.status(400).send({
        error: 'Task id and status required'
      });
    }
    const task = await updateTask(req.body);

    // Clear the cache
    // await redisClient.del('tasks');

    return res.send(task);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: error.message || error
    });
  }
}

module.exports = {
  createTaskController,
  getAllTasksController,
  updateTaskController
}