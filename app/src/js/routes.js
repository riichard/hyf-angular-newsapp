hyfNews.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    // Route for the home page
    .when('/', {
        templateUrl: 'pages/index.html',
        controller: 'mainController'
    })
    .when('/full/:newsId', {
        templateUrl: 'pages/full.html',
        controller: 'mainController'
    })
    .when('/category/:categoryId', {
        templateUrl: 'pages/category.html',
        controller: 'mainController'
    })
    .otherwise({
        redirectTo: '/'
    });

}]);
