angular.module('app.offcanvasnav', [])

.controller('offCanvasNavController', ['$scope', '$log', function($scope, $log){
	
	$scope.example = 'offCanvasNavController is working';
	
	// base pages for off canvas navigation
	$scope.items = ['home','web','print','video','social'];

	$scope.closeMenu = function(){
		$('.navmenu').offcanvas('toggle');
	}

}])

.directive('offcanvasnav', function($log){
	return {
		restrict : 'EA',
		template : "<div class='nav navmenu navmenu-fixed-left offcanvas'>" +
						"<a class='navmenu-brand' href='#'>VanityApp.net</a>" +
						"<ul class='nav navmenu-nav'>" +
							"<li ng-repeat='item in items'>" +
								"<a href='/{{item}}' ng-click='closeMenu()'>" +
									"{{ item | camelCasePhraseFilter }}" +
								"</a>" +
							"</li>" +
						"</ul>" +
					"</div>",
		// templateUrl : '/components/layout/offCanvasNavView.htm',
	}
})

;	