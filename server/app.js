const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/vending', { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on('error', (err)=> console.log(err));

app.use(express.json());

app.use('/inventory',routes.inventoryRouter);

app.use('/balance',routes.balanceRouter);

module.exports = app;
