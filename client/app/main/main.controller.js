'use strict';

angular.module('idb8uApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.videos = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $http.get('/api/videos').success(function(videos) {
      $scope.videos = videos;
      socket.syncUpdates('video', $scope.videos);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.addVideo = function() {
      if($scope.newVideoName === '') {
        return;
      }
      $http.post('/api/videos', { name: $scope.newVideoName, url: $scope.newVideoURL });
      $scope.newVideoName = '';
      $scope.newVideoURL = '';
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
