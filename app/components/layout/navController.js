angular.module('app.nav', [])

.controller('navController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log){
	$log.log('nav controller');

	$scope.phone 	= $rootScope.contactData.phone;
	$scope.mobile 	= $rootScope.contactData.mobile;
	$scope.email 	= $rootScope.contactData.email;

}])

.directive('topnav', function($log){
	return {
		restrict : 'AE',
		scope : false,
		template : "<nav class='nav'>" + 
						"<ul class='nav nav-pills nav-justified'>" + 
							"<li>" + 
								"<a href='javascript:void(0);' data-toggle='offcanvas' data-target='.navmenu' data-canvas='.canvas'>" + 
									"<span class='fa fa-bars'></span>" + 
									"Menu" + 
								"</a>" + 
							"</li>" + 
							"<li>" + 
								"<a href='tel:{{phone}}'>" + 
									"<span class='fa fa-phone'></span>" + 
									"Call" + 
								"</a>" + 
							"</li>" + 
							"<li>" + 
								"<a href='mailto:{{email}}'>" + 
									"<span class='fa fa-envelope'></span>" + 
									"Email" + 
								"</a>" + 
							"</li>" + 
							"<li>" + 
								"<a href='sms:{{mobile}}'>" + 
									"<span class='fa fa-mobile-phone'></span>" + 
									"Text" + 
								"</a>" + 
							"</li>" + 
						"</ul>" + 
					"</nav>",
		link : function(scope, element, attrs){
			// this runs after the html is put into the dom
		}
	}
})

;
