const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  task_text: { type: String, required: true },
  user_solution: { type: String },
  grammar: { type: [String], default: [] }, // Array of strings
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
