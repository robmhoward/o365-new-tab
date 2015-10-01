var o365TabApp = angular.module("o365TabApp", ['ngRoute']);

o365TabApp.factory("appsFactory", ['$http', function ($http) {
	var factory = {};
	
	factory.getApps = function(app) {
		return $http.get('data/apps.json');
	};

	return factory;
}]);

o365TabApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/apps',
			{
				controller: 'AppsController',
				templateUrl: 'partials/apps.html'
			})
		.otherwise({redirectTo: '/apps' });
}]);

o365TabApp.controller("AppsController", function($scope, $routeParams, appsFactory) {
	$scope.apps = [{ name: "Loading..." }];
	
	appsFactory.getApps().then(function (response) {
		$scope.apps = response.data;
	});
	
});