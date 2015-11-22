angular.module('Auth').controller('HomeController', 
		['$scope'
		, '$cookies'
		, '$location'
		, '$anchorScroll'
		, 'ApiService'
		, '$modal'
		, function(
			$scope
			, $cookies
			, $location
			, $anchorScroll
			, ApiService
			, $modal) {

	$scope.callQueue = [];
	$scope.emailQueue = [];
	$scope.isDetailsCollapsed = true;
	$scope.isAlertCollapsed = true;
	$scope.date = new Date();
	$scope.time = "1970-01-01T05:00:40.000Z"; 
	$scope.openDate = false;
	$scope.customerName = null;
	$scope.customerId = null;
	$scope.customerServices = null;
	$scope.customerPayments = null;
	$scope.customerAccount = null;
	$scope.customerTitle = null;
	$scope.customerSummary = null;

	$scope.alerts = [];

	 $scope.modal = {
    	"title": 'Add Work',
    	"html": true,
    };

	var getQueue = function(){
		ApiService
		.getQueue()
		.then(function(data){
			$scope.callQueue = data.call;
			$scope.emailQueue = data.email;

		}); 
	}
 
	getQueue();

	var getCustomer = function(id) {

		ApiService
		.getCustomer(id)
		.then(function(data){
			console.log(data);
			$scope.customerName = data.name;
			$scope.customerServices = data.services;
			$scope.customerAccount = data.account;
			$scope.customerPayments = data.payments;
			$scope.customerTitle = data.title;
			$scope.customerSummary = data.summary;

		}); 


	}

	$scope.customerDetails = function(){
		 $location.hash('customer-details');
         $anchorScroll();
	}

	$scope.alertMessage = function(){
		$location.hash('alert');
         $anchorScroll();
	}

	$scope.getCustomerByCall = function(id){
		getCustomer(id);
		$scope.isDetailsCollapsed = false;
		setTimeout(function() {
			$scope.customerDetails();
		}, 0)
		
	}

	$scope.getCustomerByEmail = function(id){
		getCustomer(id);
		$scope.isDetailsCollapsed = false;
		setTimeout(function() {
			$scope.customerDetails();
		}, 0)
	}      
	
	$scope.issueSave = function(){
		$scope.alerts = [];
		$scope.alerts.push({type:'success', msg: 'Current issue saved.'});
		setTimeout(function() {
			$scope.alertMessage();
		}, 0)
	}

	$scope.followUpSave = function(){

		$scope.alerts = [];
		$scope.alerts.push({type:'success', msg: 'Followup date is set on '+ formattedDate($scope.date)});
		setTimeout(function() {
			$scope.alertMessage();
		}, 0)
	}

	$scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

	

	function formattedDate(date) {
    
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}  

}]);
