angular.module('Auth').factory('ApiService', function($http, $q) {
	return {
		getQueue: function(){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'queue.json'
			}).then(function(response) {
					console.log(response);
                    deferred.resolve(response.data);

				}, function(){

				});
			return deferred.promise;
		},

		getCustomer: function(id){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'id_'+id+'.json'
			}).then(function(response) {
					console.log(response);
                    deferred.resolve(response.data);

				}, function(){

				});
			return deferred.promise;
		}
	}
});
