
angular.module('app.youtubeiframe', [])

.controller('youtubeiframeController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log){

}])

.directive('youtubeiframe', function($window){
	return {
		restrict : 'AE',
		scope : {
			width : '@',
			height : '@',
			videoID : '@',
			videourl : '@'
		},
		//template : "<div>{{videoID}}</div>", 
		template : "<iframe ng-src='{{videourl}}' frameborder='0' allowfullscreen></iframe>"
		// link : function(scope, element, attrs){
		// 	var tag = document.createElement('script');
		// 	tag.src = "https://www.youtube.com/iframe_api";
		// 	var firstScriptTag = document.getElementsByTagName('script')[0];
		// 		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// 	var player;

		// 	$window.onYouTubeIframeAPIReady = function() {
		// 		player = new YT.Player(element.children()[0], {
		// 			height: scope.height,
		// 			width: scope.width,
		// 			videoId: scope.videoID
		// 		});
		// 	};
		// }
	}
})


;


