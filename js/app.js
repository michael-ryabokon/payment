var payment = angular.module('payment', ['ngGrid']);

payment.controller('PaymentMain', function ($scope) {
	$scope.rows = [{
		season: 'summer'
		// ,months: ['June', 'July', 'August']
	}];

	$scope.gridOptions = {
		data: 'rows'
	}

});















payment.directive('resize', ['$window', function ($window) {
	var $window = angular.element($window);

	function resize (event) {
		var width = $(event.currentTarget).width(),
			period = 'season'; // half-year, year

			if (width >= 767 && width <= 991) { 
				console.log('period - half-year');
			} else if (width >= 922) {
				console.log('period - full yer');
			} else {
				console.log('season');
			}
	};

	return {
		link: function () {
			$window.on('resize', resize);
		}
	}
}]);