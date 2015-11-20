angular.module('Auth').controller('HomeController', 
		['$scope'
		, '$cookies'
		, '$location'
		, 'ApiService'
		, function(
			$scope
			, $cookies
			, $location
			, ApiService) {

	$scope.callQueue = [];
	$scope.emailQueue = [];

	var getQueue = function(){
		ApiService
		.getQueue()
		.then(function(data){
			$scope.callQueue = data.call;
			$scope.emailQueue = data.email;

		}); 
	}
 
	getQueue();



	$scope.getCustomerByCall = function(customer){
		$location.path('/customer').search({name: customer.name,id: customer.id,services:customer.services,account: customer.account, payments: customer.payments, title: customer.title, summary: customer.summary});
	}

	$scope.getCustomerByEmail = function(customer){
		$location.path('/customer').search({name: customer.name,id: customer.id,services:customer.services,account: customer.account, payments: customer.payments, title: customer.title, summary: customer.summary});
	}        
  

}]);
