"use strict";
var app = require("express")();
app.get(["/", "/test"], (req, res) => {
	res.send(req.url);
});
app.listen(12306);