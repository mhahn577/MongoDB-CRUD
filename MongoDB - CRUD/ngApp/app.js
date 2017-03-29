var myapp;
(function (myapp) {
    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('edit', {
            url: '/edit-movie/:id',
            templateUrl: '/ngApp/views/editMovie.html',
            controller: myapp.Controllers.EditMovieController,
            controllerAs: 'vm'
        })
            .state('add', {
            url: '/add-movie',
            templateUrl: '/ngApp/views/addMovie.html',
            controller: myapp.Controllers.AddMovieController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(myapp || (myapp = {}));
