const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index')

/* GET users listing. */
router.get('/', controllers.users.findAll);
router.get('/:id', controllers.users.findOne);
router.post('/', controllers.users.create);
router.put('/:id', controllers.users.update);
router.delete('/:id', controllers.users.delete);

module.exports = router;