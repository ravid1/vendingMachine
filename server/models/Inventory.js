const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
    id: String,
    price: Number,
    name:String
});

module.exports = mongoose.model('Inventory', inventorySchema);