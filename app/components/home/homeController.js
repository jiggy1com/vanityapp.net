angular.module('app.home', [])

.controller('homeController', ['$scope', '$log', function($scope, $log){

	$scope.items = [
		{
			image : 'web',
			link : '/web'
		},
		{
			image : 'print',
			link : '/print'
		},
		{
			image : 'video',
			link : '/video'
		},
		{
			image : 'social',
			link : '/social'
		},
	];

}])


;


	