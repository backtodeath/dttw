angular.module('dttw.menu', [])

.config(['$stateProvider',function($stateProvider) {
	$stateProvider.state('menu', {
      url: '/menu',
      controller: 'MenuCtrl',
      templateUrl: 'src/menu/menu.html'
    });
}])

.controller('MenuCtrl', ['$scope', '$state', '$localStorage', '$rootScope','$ionicPopup','$timeout', 
                         function($scope, $state, $localStorage, $rootScope, $ionicPopup, $timeout) {
	$rootScope.toShow = true;
	 
	function showPopup() {
		if(!$rootScope.toShow){
			$rootScope.toShow = true;
			return;
		}
		$ionicPopup.alert({
			title: 'Realy want to exit?',
			 buttons: [
					      {
					        text: '<b>More Apps</b>',
					        type: 'button-balanced apps-button',
					        onTap: function(e) {
					        	$scope.getApps();
					        }
					      },
					     {
						        text: '<b>Exit</b>',
						        type: 'button-positive apps-button',
						        onTap: function(e) {
						        	tizen.application.getCurrentApplication().exit();
						        }
						      },
					      {
					        text: '<b>Cancel</b>',
					        type: 'button-default apps-button',
					        onTap: function(e) {
					        }
					      }
					    ]
		})
	};
		 
	 
	 $scope.getApps = function() {
	 		var service = new tizen.ApplicationControl(
	 				"http://tizen.org/appcontrol/operation/view",
	 				"tizenstore://SellerApps/rz71xjklxj", null, null, null);
	 		var id = "org.tizen.tizenstore";

	 		try {
	 			tizen.application.launchAppControl(service, id, function() {
	 				console.log("Service launched");
	 			}, function(err) {
	 				alert("Service launch failed: " + " " + err.message);
	 			}, null);
	 		} catch (exc) {
	 			alert("launchService exc: " + exc.message);
	 		}
	 	}
	     
	     
	     var buttonEvent = function(e) {
	 		if (e.keyName == "back") {
	 				showPopup();
	 		}
	 	}
	     
	     document.addEventListener( 'tizenhwkey', buttonEvent );
	
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
