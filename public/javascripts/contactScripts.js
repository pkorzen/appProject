
angular
  .module('contactApp', ['ngMaterial'])
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
           .position('bottom')
           .highlightAction(true)
           .highlightClass('row')
           .hideDelay(3000)
       );
     };

     console.log("hey hey hello");
  }]);


  http://plnkr.co/edit/R4vGhrSYvKJREMV7Q4rC?p=preview
  https://www.youtube.com/watch?v=Ftp1nUVyXsQ