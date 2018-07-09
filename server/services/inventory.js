const Inventory = require('../models/Inventory');

function getInventory(req,res){
        Inventory.find({},{ _id: 0 }).then((data)=>{
            console.log(data);
            res.json(data);
        });
}

function addInventory(req,res){
    const item = new Inventory(req.body);
    item.save(function (err) {
    });
}

module.exports = {getInventory,addInventory};