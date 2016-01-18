"use strict";
var express = require("express"),
	bodyParser = require("body-parser"),
	multipart = require('connect-multiparty'),
	multipartMiddleware = multipart(),
	app = express();
//app.use(bodyParser({ keepExtensions: true, uploadDir: './' }));
app.get("/", (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
		<head>
			<title>upload</title>
			<meta charset="utf-8">
		</head>
		<body>
			<form action="/" method="post" enctype="multipart/form-data">
				<input name="name" value="niko"/>
				<input type="file" name="myFile" multiple/>	
				<button>upload this file</button>
			</form>
		</body>

		</html>
	`);
});
app.post("/", multipartMiddleware, (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
		<head>
			<title>upload</title>
			<meta charset="utf-8">
		</head>
		<body>
			<h1>file name: ${req.files.myFile.name}</h1>
			<h2>file type: ${req.files.myFile.type}</h2>
		</body>

		</html>
	`);
})
app.listen(12306, () => {
	console.log("run as 12306");
});