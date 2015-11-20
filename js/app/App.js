var app = angular.module('Auth', ['ngCookies', 'ngRoute', 'ui.filters', 'mgcrea.ngStrap']);
app.config(function($routeProvider) {
$routeProvider
  .when('/home', {
   templateUrl: 'templates/home.html',
   controller: 'HomeController'
})
  .when('/customer', {
        templateUrl: 'templates/customer.html',
        controller: 'CustomerController'
})
  .otherwise({
         redirectTo: '/home'
 });
});

$("#support").on("click", function(){

  alert("The page is under progress");

});

$("#schedule").on("click", function(){

  alert("The page is under progress");

});

$("#profile").on("click", function(){

  alert("The page is under progress");

});
