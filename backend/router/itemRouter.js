const express = require('express');
const router = express.Router();

const itemController = require('../controller/itemController');
const teamController = require('../controller/teamController');

router.get('/users', itemController.getData);
router.post('/users', itemController.addData);
router.delete('/users/:id', itemController.deleteData);
router.put('/users/:id', itemController.editData);
router.post('/storeData', teamController.addteam );
router.get('/getTeams', teamController.getTeam );

module.exports = router;
