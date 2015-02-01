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
                resolve: {'cats': function(Cat) { debugger; return Cat.query(); }}
        })
    })
    .factory('Cat', function ($resource) {
        return $resource('/api/cats/:id', {'id': '@id'});
    })
    .controller('CatController', function(cat) { this.cat = cat; console.log(cat); })
    .controller('CatsController', function(cats) { this.cats = cats; console.log(cats); })
;