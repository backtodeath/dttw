angular.module('dttw', [
  'ionic',
  'ui.router',
  'ngStorage',
  'dttw.menu',
  'dttw.game',
  'ui.toggle'
  ])

.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/menu');
  var buttonEvent = function(e) {
		if (e.keyName == "back") {
			tizen.application.getCurrentApplication().exit();
		}
	}

	document.addEventListener('tizenhwkey', buttonEvent);
}])

;
