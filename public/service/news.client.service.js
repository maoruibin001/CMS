/**
 * Created by lenovo on 2017/5/31.
 */
angular.module('webapp')
    .service('request', ["$http", "$q", requestHandle]);

function requestHandle($http, $q) {
    function requestSync(url, method, params) {
        let deffer = $q.defer();
        const config = {
            method: method,
            url: url
        }

        if (method === "POST") {
            config.data = params
        } else {
            config.params = params
        }
        $http(config)
            .then(function(resData) {
                deffer.resolve(resData.data);
            }, function(error) {
                deffer.reject(error);
            });
        return deffer.promise;
    }
    return {
        list: function(params) {
            return requestSync("/news", "GET", params);
        },
        save: function(data) {
            return requestSync("/news", "POST", data);
        },
        detail: function(id) {
            return requestSync("/news/" + id, "GET");
        }
    }
}