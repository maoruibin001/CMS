/**
 * Created by lenovo on 2017/6/1.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(express.static(path.resolve(__dirname, '../public/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));