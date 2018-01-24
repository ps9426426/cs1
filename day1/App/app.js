var app=angular.module("app",["ui.router"])



app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state("default",{
			url:"/default",
			templateUrl:"App/view/default.html",
			controller:"defaultController"
		})
		.state("list",{
			url:"/list",
			templateUrl:"App/view/list.html",
			controller:"listController"
		})
	$urlRouterProvider.otherwise("/default")
}])