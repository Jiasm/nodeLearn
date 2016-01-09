"use strict";
var fs = require("fs"),
	files = fs.readdirSync("./test");
files.forEach(file => {
	if (/.txt$/.test(file)) {
		fs.watchFile(`./test/${file}`, () => {
			console.log(`${file} is change`);
		})
	}
})