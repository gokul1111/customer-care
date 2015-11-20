angular.module('Auth').controller('CustomerController', 
		['$scope'
		, '$cookies'
		, '$location'
		, '$window'
		, 'ApiService'
		, function(
			$scope
			, $cookies
			, $location
			, $window
			, ApiService) {

	$scope.equipment = {};
	$scope.customerName = $location.search().name;
	$scope.customerId = $location.search().id;
	$scope.customerServices = $location.search().services;
	$scope.customerPayments = $location.search().payments;
	$scope.customerAccount = $location.search().account;
	$scope.customerTitle = $location.search().title;
	$scope.customerSummary = $location.search().summary;

	$scope.date = new Date();
	$scope.time = "1970-01-01T05:00:40.000Z"; 
	$scope.openDate = false;
	
	$scope.issueSave = function(){
		alert("Current Issue is saved");
	}

	$scope.followUpSave = function(){
		alert("Next follow up date is set on " + formattedDate($scope.date));
	}

	function formattedDate(date) {
    
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}

}]);
