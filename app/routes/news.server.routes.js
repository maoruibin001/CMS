/**
 * Created by lenovo on 2017/5/24.
 */
const newsController = require('../controllers/news.server.controller');
module.exports = function(app) {



    app.route('/news')
        .get(newsController.list)
        .post(newsController.create);

    app.route('/news/:id')
        .get(newsController.get);

    app.param('id', newsController.getNewsById);



}