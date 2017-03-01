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
}])

;
