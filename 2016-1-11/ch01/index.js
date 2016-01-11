"use strict";
module.exports = require("http").createServer((res, rep) => {
	rep.writeHead(200, {
		"Content-Type": "text/html"
	});
	rep.end("<h1>Hello World</h1>")
});