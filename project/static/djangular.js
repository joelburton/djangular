angular.module('catsApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $routeParamsProvider) {
        $routeProvider
            .when('/cat/:id', {
                templateUrl: '/static/cat.html',
                controller: 'CatController',
                controllerAs: 'c',
                resolve: {'cat': function(Cat, $route) {
                    return Cat.get({'id': $route.current.params.id }); }}
        })
            .otherwise({
                templateUrl: '/static/cats.html',
                controller: 'CatsController',
                controllerAs: 'c',
                resolve: {'cats': function(Cat) { return Cat.query(); }}
        })
    })
    .factory('Cat', function ($resource) {
        return $resource('/api/cats/:id', {'id': '@id'});
    })
    .controller('CatController', function(cat) { this.cat = cat; })
    .controller('CatsController', function(cats) { this.cats = cats; })
;
