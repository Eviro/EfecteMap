self.port.on('getvalue', function() {
	element_val = $("#attribute_value_692").html();
	self.port.emit("efectevalue",element_val);
	console.log("Found: "+element_val);
});



self.port.on('html', function(html) {
	console.log("Page source:  "+html);

	dom = $.parseHTML(html);
	// find link
	var link = $('a[href^="http://vejviser.sdu.dk/"]',dom);
	link = link.attr("href");
	
	element_val = $("#attribute_value_692").html();
	element = $("#attribute_value_692").html("<a target='_blank' href="+link+">"+element_val+"</a>");

	
	

});
