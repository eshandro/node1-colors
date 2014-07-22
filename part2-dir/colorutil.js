module.exports = {
		luminosity: function(red, green, blue) {
			var luminosity = .2126*red + .7152*green + .0722*blue;
			return luminosity;
		},
		darken: function(red,green,blue) {
			red *= .8;
			green *= .8;
			blue *= .8;
			return red + ' ' + green + ' ' + blue;

		}
};