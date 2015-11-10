angular.module('app.stringFilters', [])

.filter('camelCasePhraseFilter', function(){
	return function(str){
		var aString = str.toLowerCase().split(' ');
		var returnThis = '';
		for(var i=0;i<aString.length;i++){

			if( aString[i].length > 1){
				returnThis += aString[i].charAt(0).toUpperCase() + aString[i].substring(1, aString[i].length);
			}else{
				returnThis += aString[i].charAt(0).toUpperCase();
			}
			returnThis += ' ';		
		}
		return returnThis.trim();	
	}	
})

;