var hyfNews = angular.module('hyfNews', ['angular.filter', 'ngResource', 'ngRoute'])
    .controller('myCtrl', function(news, categories) {
        var ctrl = this;

        categories.getCategories().then(function(categories) {
            ctrl.categories = categories;
        });

        news.getNews().then(function(articles) {
            ctrl.articles = articles;
        });
    });

