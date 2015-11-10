angular.module('app.web', [])

.controller('webController', ['$scope', '$log', function($scope, $log){
	$log.log('webController');

	$scope.flexslider 			= {};
	$scope.flexslider.folder 	= 'web';
	$scope.flexslider.filenames = ['Web-1.jpg','Web-2.jpg','Web-3.jpg','Web-4.jpg','Web-5.jpg','Web-6.jpg','Web-7.jpg','Web-8.jpg','Web-9.jpg','Web-10.jpg','Web-11.jpg','Web-12.jpg','Web-13.jpg','Web-14.jpg','Web-15.jpg','Web-16.jpg','Web-17.jpg','Web-18.jpg','Web-19.jpg','Web-20.jpg'];
	
}])

;