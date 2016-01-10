"use strict";
var http = require("http"),
	qs = require("querystring"),
	search = process.argv.slice(2).join(' ').trim(),
	iconv = require('iconv-lite');

if (!search.length) {
	return console.log("no parms");
}

http.request({
	host: "wthrcdn.etouch.cn",
	path: "/weather_mini?" + qs.stringify({
		city: search
	})
}, res => {
	var body = '';
	res.setEncoding("utf-8");
	res.on("data", data => {
		body += data;
	})
	res.on("end", () => {
		console.log(iconv.encode(body, 'gbk'));
		var obj = JSON.parse(body);
		console.log(obj);
	})
}).end();