"use strict";
var fs = require("fs");
require("http").createServer((req, res) => {
	let url = req.url;
	if ("/" === url) {
		build(res, `${__dirname}/index.html`, "html");
	} else if (/\.html/.test(url)) {
		build(res, `${__dirname}/${url}`, "html");
	} else if (/\.png/.test(url)) {
		build(res, `${__dirname}/${url}`, "png");
	}
}).listen(12306);
function build (res, url, type) {
	res.writeHead(200, {
		"Content-Type": `text/${type}`
	});
	fs.createReadStream(url).pipe(res);
}