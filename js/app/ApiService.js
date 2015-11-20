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
		getEquipmentById: function(id){
			var deferred = $q.defer();
			 var key=  localStorage.getItem('key');
			$http({
				method: 'GET',
				url: 'http://69.50.196.208:3007/api/v1/equipment_management_updates/equipments?auth_token='+key+'&id='+id,
				
			}).then(function (response) {
				console.log(response);
				deferred.resolve(response.data);
			}, function(){
				deferred.reject();
			});
			return deferred.promise;
		},
		getEquipmentBySerialNumber: function(serialNumber){
			var deferred = $q.defer();
		//	var tokenId = $cookies.get('tokenId');
			console.log(serialNumber+"ddddddddddd");
			 var key=  localStorage.getItem('key');
		//	console.log(tokenId+"ddddddddddd");
			$http({
				method: 'GET',
				url: 'http://69.50.196.208:3007/api/v1/equipment_management_updates/equipments?auth_token='+key+'&searched='+serialNumber,
				
			}).then(function (response) {
				console.log(response);
				deferred.resolve(response.data);
			}, function(){
				deferred.reject();
			});
			return deferred.promise;
		}, 
		getEquipmentByRegion: function(equipRegion){
			var deferred = $q.defer();
		//	var tokenId = $cookies.get('tokenId');
			console.log(region+"ddddddddddd");
			 var key=  localStorage.getItem('key');
		//	console.log(tokenId+"ddddddddddd");
			$http({
				method: 'GET',
				url: 'http://69.50.196.208:3007/api/v1/equipment_management_updates/equipments?auth_token='+key+'&region='+region,
				
			}).then(function (response) {
				console.log(response);
				deferred.resolve(response.data); 
			}, function(){
				deferred.reject();
			});
			return deferred.promise;
		}, 
	}
});
