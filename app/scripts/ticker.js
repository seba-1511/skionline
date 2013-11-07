jQuery(document).ready(function($) {
	var ticker = function()
	{
		setTimeout(function(){
			$("ul#ticker li:first").animate( {opacity:0}, 800, function()
			{
				$(this).detach().appendTo("ul#ticker").removeAttr("style");	
			});
			ticker();
		}, 6000);
	};
	ticker();

});
