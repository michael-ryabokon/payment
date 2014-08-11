var payment = angular.module('payment', []);

payment.controller('PaymentMain', function ($scope) {
	//move to BE
	var response = [{
		season: 'summer',
		months: ['June', 'July', 'August']
	}, {
		season: 'autumn',
		months: ['Septemper', 'October', 'November']
	}, {
		season: 'winter',
		months: ['December', 'January', 'February']
	}, {
		season: 'spring',
		months: ['March', 'April', 'May']
	}];

	$scope.getMonths = function (data) {
		var result = [];

		angular.forEach(data, function (row) {
			result = result.concat(row.months);
		});

		return result;
	};

	$scope.months = $scope.getMonths(response);
	
	$scope.totalMonths = $scope.months.length;
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