var request = require('request');
var _ = require('underscore');
var colorname = process.argv[2];

var findRGB = function() {
	var colorname = process.argv[2];
	var foundColor = _.find(
	request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body) {
		console.log(JSON.parse(body));
	}),
	function(item) {
		return item.name === colorname;
	});

console.log(foundColor.rgb);
}