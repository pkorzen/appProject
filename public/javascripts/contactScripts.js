angular
  .module('contactApp', ['ngMaterial','jcs-autoValidate','ngRoute'])
  .config(function($interpolateProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  })
  .controller('contactController', ['$scope', '$http','$mdToast', '$animate',
        function($scope, $http, $mdToast, $animate, $setViewValue){

     $scope.sendMail = function(contactForm,contactForm1) {

        var next = contactForm;

        console.log(next);
        $http.post('/contact', next);

        $mdToast.show(
           $mdToast.simple()
               .textContent('Dziękujemy za wiadomość ' + contactForm.contactName)
               .position('bottom')
               .highlightAction(true)
               .highlightClass('row')
               .hideDelay(5000)
        );

    contactForm1.$setPristine();
    $scope.contactForm={};
     };

     console.log("hey hey hello");
  }]);
