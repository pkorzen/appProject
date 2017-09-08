angular
  .module('contactApp', ['ngMaterial','jcs-autoValidate'])
  .config(function($interpolateProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  })
  .controller('contactController', ['$scope', '$http','$mdToast', '$animate',
        function($scope, $http, $mdToast, $animate){

     $scope.sendMail = function() {

        var mail = {
          name: this.contactName,
          email: this.contactEmail,
          message: this.contactMsg
        }
        console.log(mail);
        $http.post('/contact', mail);



        $mdToast.show(
           $mdToast.simple()
               .textContent('Dziękujemy za wiadomość ' + mail.name)
               .position('bottom')
               .highlightAction(true)
               .highlightClass('row')
               .hideDelay(5000)
        );

        //$scope.contactName = null;
        $scope.contactName.$setPristine();
     };

     console.log("hey hey hello");
  }]);


