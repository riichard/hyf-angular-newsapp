hyfNews.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    // Route for the home page
    .when('/', {
        templateUrl: 'pages/index.html',
        controller: 'myCtrl as newMyCtrl'
    })
    .when('/full/:newsId', {
        templateUrl: 'pages/full.html',
        controller: 'fullController'
    })
    .when('/category/:categoryId', {
        templateUrl: 'pages/category.html',
        controller: 'categoryController'
    })
    .otherwise({
        redirectTo: '/'
    });

}]);
