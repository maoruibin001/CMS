/**
 * Created by lenovo on 2017/5/24.
 */
const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
    title : { type:String },//属性title,类型为String
    content : { type:String },//属性content,类型为String
    abstract: {type: String}, //属性abstract,类型为String
    time : { type:Date, default:Date.now }
});
const ABSTRACTLENGTH = 20;
let News = mongoose.model('News', TestSchema);
module.exports = {
    create(req, res, next) {
        const news = new News(req.body);
        news.save((err) => {
            if (err) return next(new Error('save error'));
            const content = {
                code: '000000',
                message: 'success',
                model: {content: news}
            }
            return res.json(content);
        });
    },
    list(req, res, next) {
        let pageSize = parseInt(req.query.pageSize) || 10,
            pageNo = parseInt(req.query.pageNo) || 1;
        var count  = 0;
        News.find().count().exec(function(err, totalCount) {
            if (err) {
                return;
            }
            News.find()
                .skip((pageNo - 1) * pageSize)
                .limit(pageSize)
                .exec(function(err, doc) {
                    if (err) return next(new Error(err.message));
                    if (!doc) return next(new Error('NOT FOUND'));
                    doc.forEach(function(e) {
                        if (e.content) e.abstract = e.content.slice(0, ABSTRACTLENGTH);
                    })
                    const content = {
                        code: '000000',
                        message: 'success',
                        model: {list: doc, pageSize: pageSize, pageNo: pageNo, totalCount:totalCount}
                    }
                    res.json(content);
                });
        })

    },
    get(req, res, next) {
        const content = {
            code: '000000',
            message: 'success',
            model: {news: req.news}
        }
        res.json(content);
    },
    getNewsById(req, res, next, id) {
        if (!id) return next(new Error('NEWS NOT FOUND'));
        News.findOne({_id: id})
            .exec(function(err, doc) {
                if (!doc) return next(new Error('NEWS NOT FOUND'));
                req.news = doc;
                return next();
            })
    }
}