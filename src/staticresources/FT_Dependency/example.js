function FT_OVERRIDE() {}
	
FT_OVERRIDE.prototype.add = function(a, b) {
	return a + b;      
};

// Instantiate new objects with 'new'
var FT = new FT_OVERRIDE();
window.FT= FT;