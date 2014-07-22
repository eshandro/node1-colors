var request = require('request');
var _ = require('underscore');
var colorName = process.argv[2].toLowerCase();

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', 
	function(error, response, body) {
		var pageJSON = JSON.parse(body);

		var colorItem = _.find(pageJSON, function(item) {
			return item.name.toLowerCase() === colorName 
		});
		
		var red = colorItem.rgb.r;
		var green = colorItem.rgb.g;
		var blue = colorItem.rgb.b;
		console.log(red + ' ' + green + ' ' + blue);
		return red + ' ' + green + ' ' + blue;
	});
