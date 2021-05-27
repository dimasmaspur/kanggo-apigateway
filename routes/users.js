const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users');

const verifyToken = require('../middlewares/verifyToken');


router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.put('/', verifyToken, userHandler.update);
router.get('/', verifyToken, userHandler.getUser);
router.get('/all', userHandler.getAll);
// router.post('/logout', verifyToken, userHandler.logout);

module.exports = router;