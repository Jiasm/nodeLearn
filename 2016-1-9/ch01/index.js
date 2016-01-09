"use strict";
let fs = require("fs");
console.log(fs.readdirSync(__dirname));
fs.readdir(__dirname, (err, files) => {
	console.log(files)
});