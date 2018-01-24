app.controller("defaultController",["$scope","listServer",function($scope,listServer){
	listServer.getData().then(function(result){
		console.log(result)
		$scope.data=result
	})
}])