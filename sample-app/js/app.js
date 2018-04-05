var app = angular.module('sample-video-app', ['ui.router', 'ngAnimate', 'lazy-scroll', 'angular.snackbar']);

app.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1 
    // $urlRouterProvider.otherwise("app/home");
    $urlRouterProvider.otherwise("home");
  
    // Now set up the states 
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "HomeController"
    })
    .state('search', {
        url: "/search",
        templateUrl: "views/search.html",
        controller: "SearchController"
    });
});