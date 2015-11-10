angular.module('app.template', [])

.controller('templateController', ['$scope', '$log', function($scope, $log){
	$log.log('template controller');
	$scope.example = '_template is working';
}])

.directive('directiveName', function(){
	return {
		restrict : 'AEC',
		scope : {

		},
		template : "",
		// or templateUrl : "path/to/template",
		link : function(scope, element, attrs){

		}
	}
})

;