const taskModel = require("../schema/task");

const createNewTask = async (taskData) => {
  try {
    const task = new taskModel({
      title: taskData.title,
      description: taskData.description,
    });

    const savedTask = await task.save();
    return savedTask;
  } catch (error) {
    throw error
  }
}

const getAllTasks = async () => {
  try {
    const tasks = await taskModel.find();
    // console.log(tasks);
    return tasks;
  } catch (error) {
    throw error;
  }
}

const updateTask = async (data) => {
  try {
    const task = await taskModel.findByIdAndUpdate(data.id,
      {
        status: data.status,
      },
      { new: true }
    );
    return task;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createNewTask,
  getAllTasks,
  updateTask
}