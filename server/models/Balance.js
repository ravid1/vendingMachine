const mongoose = require('mongoose');

const balanceSchema = mongoose.Schema({
    amount: Number
});

module.exports = mongoose.model('balance', balanceSchema);