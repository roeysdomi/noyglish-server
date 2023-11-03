const express = require('express');
const router = express.Router();

// Import controllers
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const grammarCheckController = require("../controllers/grammarCheckController")
const taskController = require('../controllers/taskController');

// User routes
// router.get('/users', userController.getAllUsers);
// router.get('/users/:id', userController.getUserById);
// router.post('/users', userController.createUser);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

// // Product routes
// router.get('/products', productController.getAllProducts);
// router.get('/products/:id', productController.getProductById);
// router.post('/products', productController.createProduct);
// router.put('/products/:id', productController.updateProduct);
// router.delete('/products/:id', productController.deleteProduct);

// // Order routes
// router.get('/orders', orderController.getAllOrders);
// router.get('/orders/:id', orderController.getOrderById);
// router.post('/orders', orderController.createOrder);
// router.put('/orders/:id', orderController.updateOrder);
// router.delete('/orders/:id', orderController.deleteOrder);


//grammar 3rd party api
router.post('/check-grammar', grammarCheckController.checkGrammar);
//get tasks

router.post('/tasks/create', taskController.createTask);
router.get('/tasks/all', taskController.getAllTasks);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.updateTask);


module.exports = router;
