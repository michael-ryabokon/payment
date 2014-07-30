var payment = angular.module('payment', []);

payment.controller('MainContrller', function ($scope) {
	$scope.resize = function () {
		debugger;
	}
});

payment.directive('resize', ['$window', function ($window) {
	var _window = angular.element($window);

	return function (scope, element, attrs) {
		_window.on('resize', scope.resize); 
	}
}]);