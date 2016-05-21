hyfNews.service('news', function($http) {

    this.getNews = function() {
        return $http.get('news.json')
        .then(function(response) {
            return response.data;
        })
    }

    this.getCategories = function() {
        return $http.get('categories.json')
        .then(function(response) {
            return response.data;
        })
    }
});

