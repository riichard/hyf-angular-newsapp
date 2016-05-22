var hyfNews = angular.module('hyfNews', ['angular.filter', 'ngResource', 'ngRoute'])
    .controller('myCtrl', function(news, categories) {
        var ctrl = this;

        categories.getCategories().then(function(categories) {
            ctrl.categories = categories;
        });

        news.getNews().then(function(articles) {
            ctrl.articles = articles;
        });
    })
    .controller('articleController', function($scope, $routeParams) {
        var articles = $scope.$parent.newMyCtrl.articles;
        var articleId = $routeParams.articleId;
        for(var i = 0; i < articles.length; i++) {
            if( articles[i].news_id == articleId) {
                $scope.article = articles[i];
                break;
            }
        }
    })
    .controller('articlesController', function($scope, $routeParams) {
        var articles = $scope.$parent.newMyCtrl.articles;
        var categoryId = $routeParams.categoryId;
        var displayArticles = [];
        if(categoryId) {
            console.log('has category id', categoryId);
            for(var i = 0; i < articles.length; i++) {
                if( articles[i].category_id == categoryId) {
                    displayArticles.push(articles[i]);
                }
            }
        }
        else {
            displayArticles = articles;
        }
        $scope.displayArticles = displayArticles;
    });
