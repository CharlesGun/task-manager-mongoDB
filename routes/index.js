const express = require('express');
const router = express.Router();
const users = require('./users');
const tasks = require('./tasks');


router.use('/user', users);
router.use('/task', tasks);


module.exports = router;
