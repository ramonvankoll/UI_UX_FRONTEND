'use strict';

/**
 * @ngdoc overview
 * @name codeGorillaApp
 * @description
 * # codeGorillaApp
 *
 * Main module of the application.
 */
angular
  .module('codeGorillaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'profile'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl',
        controllerAs: 'contact'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'registrationCtrl',
        controllerAs: 'registration'
      })
    .when('/forgotpassword', {
      templateUrl: 'views/forgotpassword.html',
      controller: 'forgotpasswordCtrl',
      controllerAs: 'forgotpassword'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
