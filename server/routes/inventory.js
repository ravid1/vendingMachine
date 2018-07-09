const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const inventoryService = require('../services/index');

router.get('/', inventoryService.getInventory);

router.post('/', inventoryService.addInventory);

module.exports = router;