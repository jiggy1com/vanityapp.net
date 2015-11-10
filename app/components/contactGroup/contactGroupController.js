angular.module('app.contactgroup', [])

.controller('contactGroupController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log){

	$scope.phone 	= $rootScope.contactData.phone;
	$scope.email 	= $rootScope.contactData.email;
	$scope.mobile 	= $rootScope.contactData.mobile;

}])

.directive('contactgroup', function(){
	return {
		restrict : 'AE',
		template : "<div class='btn-group' role='group' aria-label='photo-contact-box'>" +
						"<a class='btn btn-default' href='tel:{{phone}}'>Call</a>" +
						"<a class='btn btn-default' href='mailto:{{email}}'>Email</a>" +
						"<a class='btn btn-default' href='sms:{{mobile}}'>Text</a>" +
					"</div>"
	}
})


;


	