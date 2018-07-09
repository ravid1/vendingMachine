const balanceModel = require('../models/Balance');

function getBalance(req,res) {
    balanceModel.find().then((data)=>{
        res.json(data);
    })
}

function updateBalance(req,res) {
    balanceModel.findById(req.body.data).then((balance)=>{
        if(balance.amount){
            --balance.amount;
            balance.save();
            res.status(200)
        }
    });
}

module.exports = {getBalance,updateBalance}
