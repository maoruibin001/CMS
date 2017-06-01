/**
 * Created by lenovo on 2017/5/31.
 */
angular.module('webapp')
    .controller('news', ['$scope','request', controllerHandler]);
const CODE = '000000';
function controllerHandler($scope, request) {
    $scope.list = [];
    $scope.news = {};
    $scope.errorMsg = '';
    $scope.pageSet = [];
    $scope.pageNo = 1;
    $scope.pageIndex = 0;


    // 刷新active
    $scope.resetActive = function() {
        $('.pagination li').removeClass('active');
        $('.pagination li').eq($scope.pageNo).addClass('active');
    }
    // 监听pageNo变化，触发active
    $scope.$watch('pageNo',function(newValue,oldValue, scope){
        $scope.resetActive();
    });
    // 监听新闻列表循环结束
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        $scope.resetActive();
    })

    //查询新闻列表
    $scope.queryList = function(no) {
        let pageNo = no || $scope.pageNo;
        $scope.pageNo = pageNo;
        request.list({pageNo: pageNo}).then(function(data) {
            $scope.list = data.model.list;
            let pageIndex = Math.ceil(data.model.totalCount / data.model.pageSize)
            $scope.pageIndex = pageIndex;
            $scope.pageSet = [];
            for (let i = 1; i <=pageIndex; i ++) {
                $scope.pageSet.push(i);
            }
        })
    };
    // 新增一条新闻
    $scope.save = function() {
        if (!$scope.news.title) {
            $scope.errorMsg = '请输入标题';
            return;
        }
        if (!$scope.news.content) {
            $scope.errorMsg = '请输入内容';
            return;
        }
        $scope.errorMsg = '';
        request.save($scope.news).then(function(resultData) {
            if (resultData.code === CODE) {
                $scope.queryList();
                $('#create').modal('hide');

            }
        }, function(error) {})
    }
    // 查询详情
    $scope.showDetail = function(id) {
        if (!id) return;
        request.detail(id).then(function(resultData) {
            if (resultData.code === CODE) {
                $('#detail').modal('show');
                $scope.itemNews = resultData.model.news;
            }

        }, function() {})
    }
    // 分页查询
    $scope.queryPage = function(pageMark) {
        if (pageMark === 'pre') {
            if ($scope.pageNo <= 1) return;
            $scope.pageNo -= 1;
        } else if (pageMark === 'next') {
            if ($scope.pageNo >= $scope.pageIndex) return;
            $scope.pageNo += 1;
        } else {
            $scope.pageNo = pageMark;
        }

        $scope.queryList($scope.pageNo);
    }
    // 初始化
    $scope.queryList();
}