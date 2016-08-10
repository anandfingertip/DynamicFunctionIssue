({
	execute: function(component) {
		component.set("v.output", "5 + 5 = " + window.FT.add(5,5));
	},
	execute2: function(component) {
		var testFunction = Function('a', 'b', 'window.FT.add(a,b)');

		component.set("v.output", "5 + 5 = " + testFunction(10,10));
	}
})
