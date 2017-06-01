/**
 * Created by lenovo on 2017/5/24.
 */
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function() {
    const db = mongoose.connect(config.mongodb);
    require('../app/models/news.server.model');
    return db;
}