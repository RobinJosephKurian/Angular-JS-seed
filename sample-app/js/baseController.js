app.controller('BaseController', ['$scope', function ($scope) {
  
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
        if (toState.name === 'home') {
            $scope.back = true; 
        } else {
            $scope.back = false; 
        }
    });
}]);