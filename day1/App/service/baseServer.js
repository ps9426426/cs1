app.factory("baseServer",function($q,$http){
	var factory={
		getJson:function(url){
			var defer=$q.defer();
			$http({
				url:url,
				method:"GET"
			}).success(function(result){
				defer.resolve(result)
			}).error(function(error){
				defer.reject(error)
			})
			return defer.promise;
		}
	}
	return factory;
})