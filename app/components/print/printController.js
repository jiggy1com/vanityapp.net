angular.module('app.print', [])

.controller('printController', ['$scope', '$log', function($scope, $log){
	$log.log('print controller');

	$scope.flexslider = {};
	$scope.flexslider.folder 	= 'print';
	$scope.flexslider.filenames = ['Banners-1.jpg',
									'Banners-2.jpg',
									'BCard-1.jpg',
									'BCard-2.jpg',
									'BCard-3.jpg',
									'BCard-4.jpg',
									'BCard-5.jpg',
									'Business_Cards-1.jpg',
									'Invites.jpg',
									'Program.jpg',
									'Pull-Up.jpg',
									'Spa-Menu.jpg',
									'Step_Wall.jpg',
									'Vehicle-Wrap.jpg',
									'Wide_Fromat.jpg']

}])

;