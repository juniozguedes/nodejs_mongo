const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb://127.0.0.1:27017/netflix')

//carrega os models
const Product = require('./models/product');
//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;