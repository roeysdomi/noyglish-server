const taskService =require("../services/taskService")
exports.createTask = async (req, res) => {
    try {
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
        console.log(error)

      res.status(500).json({ message: "Failed to create task", error });
    }
  };
  
  exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        console.log(tasks)
      res.status(200).json(tasks);
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "Failed to get tasks", error });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      await taskService.deleteTask(id);
      res.json({ message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete task", error });
    }
  };
  
  exports.updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await taskService.updateTask(id, req.body);
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: "Failed to update task", error });
    }
  };
  