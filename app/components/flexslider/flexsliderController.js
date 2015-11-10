angular.module('app.flexslider', [])

.controller('flexsliderController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log){



}])

.directive('flexslider', function(){
	console.log('flexslider scope');
	return {
		restrict : 'E',
		transclude : true,
		scope : false,
		template : "<div class='flexslider'><ul class='slides'></ul></div>",
		link : function(scope, element, attrs){
			for(var i=0;i<=scope.flexslider.filenames.length;i++){
				angular.element(element).children('div').children('ul').append("<li><img src='/assets/image/"+scope.flexslider.folder+"/"+scope.flexslider.filenames[i]+"'></li>");
			}
			$('.flexslider').flexslider({
				animate : 'slide'
			});
		}
	}
})


;


	