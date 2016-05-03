var app = angular.module('application',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl: 'home.html'
	})
	.when('/about',{
		templateUrl: 'about.html'
	})
	.otherwise({
        redirectTo: '/home'
	});

}]);