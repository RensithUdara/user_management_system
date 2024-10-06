const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('./user', controller.getUsers);
router.post('./user', controller.addUsers);
router.post('./user', controller.updateUsers);
router.post('./user', controller.deleteUsers);

module.exports = router;