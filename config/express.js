/**
 * Created by lenovo on 2017/5/24.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = function() {
    console.log('express init');
    const app = express();
    app.use(express.static(path.resolve(__dirname, '../public/')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    require('../app/routes/news.server.routes')(app);

    app.use(function(req, res, next) {
        res.status(404);
        try {
            return res.json('NOT FOUND');
        } catch (e) {
            console.error('404 set header after sent');
        }

    });

    app.use(function(err, req, res, next) {
        if (!err) {
            next()
        } else {
            res.status(500);
            try {
                return res.json(err.message || '500 SERVER ERROR');
            } catch (e) {
                console.error('500 set header after sent');
            }
        }
    });



    return app;
}