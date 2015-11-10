function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function setTheme(theme){
	$('#theme').attr('href', 'css/theme/bootstrap-'+theme+'.min.css');
}

$(document).ready(function(){

	var cookies = document.cookie.split(';');
	for(var i=0;i<cookies.length;i++){
		var cookie 		= cookies[i].split('=');
		var cookieName 	= cookie[0];
		var cookieValue = cookie[1];

		if(cookieName == 'theme'){
			setTheme(cookieValue);
		}
	}

	$('.changeTheme').click(function(){
		setCookie('theme', $(this).attr('data-theme'), 1);
		setTheme($(this).attr('data-theme'));
	});

	$('.flexslider').flexslider({
		animation: "slide"
	});

});