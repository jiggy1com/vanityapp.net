angular.module('app.video', [])

.controller('videoController', ['$scope', '$log', function($scope, $log){
	$log.log('videoController');
	$scope.videos = [
		{
			videoID : "FNg2DjWBWck",
			videoURL : '//www.youtube.com/embed/FNg2DjWBWck',
			title : "Sysco Soupbase Introduction",
			description : "Pre-Production, Video Production, Voice-over, Post-Production, Final Render"
		},
		{
			videoID : "9VgybrQDLtY",
			videoURL : '//www.youtube.com/embed/9VgybrQDLtY',
			title : "Classic Gourmet",
			description : "Animation project, Pre & Post-Production, Final Render"
		},
		{
			videoID : "VkXvwdzxnxA",
			videoURL : '//www.youtube.com/embed/VkXvwdzxnxA',
			title : "Sharp International Promo Video",
			description : "After Effects, Post-Production, Final Render"
		},
		{
			videoID : "q1_JgK8U2PA",
			videoURL : '//www.youtube.com/embed/q1_JgK8U2PA',
			title : "Peerless Tradeshow Video",
			description : "Pre Production, Video Shoot, Post-Production, Final Render"
		},
		{
			videoID : "lVjUiny__bU",
			videoURL : '//www.youtube.com/embed/lVjUiny__bU',
			title : "Little By Little Infomercial",
			description : "Pre Production, Video Shoot, Voice Over, Post-Production, Final Render"
		}
		,
		{
			videoID : "ICoZceRUg-A",
			videoURL : '//www.youtube.com/embed/ICoZceRUg-A',
			videoID : "ICoZceRUg-A",
			title : "Champion Broadband 30 sec Commercial",
			description : "Storyboard, Pre Production, Animation, Voice Over, Post-Production, Final Render"
		},
	];


}])

;