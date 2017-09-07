
angular
  .module('contactApp', ['ngRoute', 'ngMaterial'])
  .config(function($interpolateProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  })
  .controller('contactController', ['$scope', '$http','$mdToast', '$animate',
        function($scope, $http, $mdToast, $animate){

     $scope.sendMail = function() {

       $mdToast.show(
         $mdToast.simple()
           .textContent('Simple Toast!')
           .position('top')
           .hideDelay(3000)
       );
     };

     console.log("hey hey hello");
  }]);