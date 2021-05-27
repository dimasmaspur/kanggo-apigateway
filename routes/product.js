const express = require('express');
const router = express.Router();
const productHandler = require('./handler/products');

const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");
/* GET users listing. */
router.get('/all', productHandler.getAll);
router.get('/:id', productHandler.get);
router.post('/', verifyToken, can('admin'), productHandler.create);
router.put('/:id', verifyToken, can("admin"), productHandler.update);
router.delete('/:id', verifyToken, can("admin"), productHandler.destroy);

module.exports = router;
