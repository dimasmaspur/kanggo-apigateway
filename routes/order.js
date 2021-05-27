const express = require('express');
const router = express.Router();
const orderHandler = require('./handler/order-payment');

const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");
/* GET users listing. */
router.get('/all', verifyToken, can('admin'), orderHandler.getAll);
router.get('/:id', verifyToken, orderHandler.get);
router.post('/', verifyToken, can('user'), orderHandler.create);
router.put('/pay/:id', verifyToken, can("user"), orderHandler.paid);
router.put('/:id', verifyToken, can("admin"), orderHandler.done);

module.exports = router;
