const express =require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser= require('body-parser');

const connectDB = require('./server/database/db');
connectDB();

app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/route'))

app.listen(8080);