/**
 * Created by lenovo on 2017/5/24.
 */
const express = require('./config/express');
const mongoose = require('./config/mongoose');

const app = express();
const db = mongoose();




module.exports = app;