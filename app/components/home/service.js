app.factory('homeService', function($log){

	var factory = {};

		factory.testMethod = function(){
			$log.log('i am the homeService logging...');
		}

	return factory;

});