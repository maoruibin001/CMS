/**
 * Created by lenovo on 2017/5/31.
 */
angular.module('webapp')
    .filter('format', function() {
        return function(time, mark) {
            return moment(time).format(mark);
        }
    })
    .filter('limitTo',function(){
    return function (h,m){//参数 h 为|之前的数据，m 为过滤器之后的数据，如果数据为多个值，可以用:分开
        return m;
    }
});