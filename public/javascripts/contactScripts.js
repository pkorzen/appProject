angular
  .module('contact111', ['ngRoute','ngMaterial'])
  .config(function($interpolateProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  })
  .controller('contactController',['$scope', '$http', '$mdToast' , '$animate', function ($scope, $http, $mdToast, $animate) {

            $scope.toastPosition = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };

            //2. the method looks for the position that we want to display the toast
            $scope.getToastPosition = function() {
                return Object.keys($scope.toastPosition)
                    .filter(function(pos) { return $scope.toastPosition[pos]; })
                    .join(' ');
            };

            //1. The send button will call this method
            this.sendMail = function() {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Thanks for your Message ' + this.contactName + ' You Rock!')
                        .position($scope.getToastPosition())
                        .hideDelay(3000)
                );
            };
        }
  ]);