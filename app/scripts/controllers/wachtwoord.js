'use strict';

/**
 * @ngdoc function
 * @name codeGorillaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeGorillaApp
 */
angular.module('codeGorillaApp')
  .controller('wachtwoordCtrl', function () {
    this.submit = function(user)
    {
        console.log(user);
    };
  });
