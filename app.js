const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const { PORT, MONGO_URL } = require('./configs/configs');
const { carRouter, userRouter } = require('./routes');
const { mainErrorHandler } = require('./errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
    mongoose.connect(MONGO_URL)
})



