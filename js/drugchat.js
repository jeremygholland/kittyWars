var app = angular.module("sampleApp", ["firebase"]);

// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://flickering-inferno-6976.firebaseio.com/");
  return $firebaseAuth(ref);
}]);

// and use it in our controller
app.controller("SampleCtrl", ["$scope", "Auth", function($scope, Auth) {
  $scope.auth = Auth;
  $scope.user = $scope.auth.$getAuth();
}])