var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];

var luminosity = .2126*red + .7152*green + .0722*blue;

if (luminosity > 155) {
	return 'light';
}
else {
	return 'dark';
}