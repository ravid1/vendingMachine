const express = require('express');
const router = express.Router();
const balanceModel = require('../models/Balance');
const balanceService = require('../services/index');

router.get('/', balanceService.getBalance);

router.put('/', balanceService.updateBalance);

module.exports = router;