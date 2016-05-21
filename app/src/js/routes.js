hyfNews.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

    // Route for the home page
    .when('/', {
        templateUrl: 'pages/index.html',
        controller: 'mainController'
    }).
    .when('/full/:newsId', {
        templateUrl: 'pages/full.html',
        controller: 'mainController'
    });
    // TODO add other pages
}]);
