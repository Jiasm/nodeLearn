"use strict";
require("http").createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	res.end("<h1>Hello World</h1>");
}).listen(12306, () => {
	console.log("connection is run on 12306")
});