angular.module('app.footer', [])

.controller('footerController', ['$scope', function($scope){
	$scope.example = 'footerController is working';
}])

.directive('footer', function(){
	return {
		restrict : 'AE',
		scope : {

		},
		template : "<div class='container'>" +
							"<div class='row'>" +
								"<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>" +
									"&copy; 2015 VanityApp.net" +
								"</div>" +
							"</div>" +
							"<div class='row'>" +
								"<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center'>" +
									"<a href='terms.cfm'>" +
										"Website Terms" +
									"</a>" +
								"</div>" +
								"<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center'>" +
									"<a href='privacy.cfm'>" +
										"Privacy Policy" +
									"</a>" +
								"</div>" +
							"</div>",
		link : function(scope, element, attrs){

		}
	}
})

;