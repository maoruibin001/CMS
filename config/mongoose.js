/**
 * Created by lenovo on 2017/5/24.
 */
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function() {
    const db = mongoose.connect(config.mongodb);
    const TestSchema = new mongoose.Schema({
        title : { type:String },//属性title,类型为String
        content : { type:String },//属性content,类型为String
        abstract: {type: String}, //属性abstract,类型为String
        time : { type:Date, default:Date.now }
    });

    mongoose.model('News', TestSchema);
    require('../app/models/news.server.model');
    return db;
}