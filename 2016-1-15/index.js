"use strict";
var express = require("express"),
	app = express();
app.use(express.static("static"));
app.all("/api/*", (req, res) => {
	res.send(req.url);
});
app.listen(12306);