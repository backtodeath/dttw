angular.module('dttw.menu', [])

.config(['$stateProvider',function($stateProvider) {
	$stateProvider.state('menu', {
      url: '/menu',
      controller: 'MenuCtrl',
      templateUrl: 'src/menu/menu.html'
    });
}])

.controller('MenuCtrl', ['$scope', '$state', '$localStorage', '$rootScope', 
                         function($scope, $state, $localStorage, $rootScope) {
	
	$scope.onPlayTap = function () {
		$state.go('game');
	};
	
	if($localStorage.normalMode === undefined){
		$rootScope.normalMode = true;
		
	}else{
		$rootScope.normalMode = $localStorage.normalMode;
	}
	
	if(!$localStorage.highScore){
		$scope.highScore = 0;
		
	}else{
		$scope.highScore = $localStorage.highScore;
	}
	
	$scope.changed = function(){
		$localStorage.normalMode = $scope.normalMode;
		$rootScope.normalMode = $scope.normalMode;
	}
	
}]);
