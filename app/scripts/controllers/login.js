'use strict';

/**
 * @ngdoc function
 * @name codeGorillaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeGorillaApp
 */
angular.module('codeGorillaApp')
  .controller('LoginCtrl', function () {
    this.submit = function(user)
    {
        console.log(user);
    };
  });
