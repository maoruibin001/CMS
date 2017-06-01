/**
 * Created by lenovo on 2017/6/1.
 */
const mongoose = require('mongoose');
var TestSchema = new mongoose.Schema({
    title : { type:String },//属性name,类型为String
    content : { type:String },//属性name,类型为String
    time : { type:Date, default:Date.now }
});
let News = mongoose.model('News2', TestSchema);
console.log();