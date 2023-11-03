
const Task = require('../models/taskModel');

exports.createTask = async (data) => {
  const task = new Task(data);
  return await task.save();
};

exports.getAllTasks = async () => {
  return await Task.find({});
};

exports.deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

exports.updateTask = async (id, updatedData) => {
  return await Task.findByIdAndUpdate(id, updatedData, { new: true });
};
