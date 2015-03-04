
var Request = require("sdk/request").Request;
var self = require("sdk/self");


var pm = require("sdk/page-mod").PageMod({
    include: "*.sdu.dk",
    contentScriptFile: [self.data.url("jquery-2.1.0.min.js"),self.data.url("contentscript.js")],
    onAttach: function(worker) {
        worker.port.emit("getvalue",true);

	worker.port.on("efectevalue", function(val){
		console.log("recived: "+val);		
		
		console.log("changed to: "+escape(val));

		// dont request if null

		if (val)
		{
	
		Request({
		    url: "http://webhotel.sdu.dk/telefonbog/vejviser.php?isIFrame=yes&nummer="+escape(val),
		    onComplete: function (response) {
			var html = response.text;              
			worker.port.emit("html", html);
		    }
		}).get();
		}
	});	
	
	
    }
});




