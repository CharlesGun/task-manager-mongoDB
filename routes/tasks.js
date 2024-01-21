const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index')

/* GET users listing. */
router.get('/', controllers.tasks.findAll);
router.get('/:id', controllers.tasks.findOne);
router.get('/user/:userId', controllers.tasks.findByUserId);
router.post('/', controllers.tasks.create);
router.put('/:id', controllers.tasks.update);
router.delete('/:id', controllers.tasks.delete);

module.exports = router;