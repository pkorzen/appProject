angular
  .module('blog', ['ngFileUpload'])
  .config(function($interpolateProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
  })
  .controller('blogController',['$scope', '$http', 'Upload', '$timeout', '$window', function ($scope, $http, Upload, $timeout, $window) {
    $http.get('/blog-posts')
      .then(function (res){
          $scope.posts = res.data;
      });

    $http.get('/isadmin')
      .then(function (res){
        var myFiles;
        $scope.isadmin = res.data.admin;

        $scope.deletePost = function(id){
          var data = {
            "id": id
          }

          $http.post('/deletepost/', data);
            console.log('Deleted: ' + id);
            location.reload();
        }

        $scope.postID = function(id, title){
          $window.location.href = '/blog/' + title;
        }

        $scope.sendPost = function(){
          let images = [];
          for(image in $scope.files){
            if(image > 0) images.push('/images/posts/' + $scope.files[image].name);
          }
          var post = {
            title: $scope.postTitle,
            shortDesc: $scope.postShort,
            content: $scope.postLong,
            mainImagePath: '/images/posts/' + $scope.files[0].name,
            images: images,
            visitors: 0
          }

          $http.post('/addpost', post);
          location.reload();
        }

        $scope.uploadFiles = function(files, errFiles) {
            $scope.files = files;
            myFiles = files;
            console.log(myFiles);
            $scope.errFiles = errFiles;
            angular.forEach(files, function(file) {
                file.upload = Upload.upload({
                    url: '/upload',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            });
        }

    });
  }])
  .filter('noSpaces', function(){
    return function(input){
      if(input) return input.replace(/\s+/g, '_');
    }
  });
