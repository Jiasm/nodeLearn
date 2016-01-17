"use strict";
var express = require("express"),
	app = express();
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.set("view options", {layout: false});
app.get("/", (req, res) => {
	res.render("index");
});
app.get("/item/:id", sendLog, (req, res) => {
	res.render("item", {
		title: ([
				"zero",
				"one",
				"two",
				"three"
			])[req.params.id] || "unknow"
	});
});
app.get("*", (req, res, next) => {
	var err = new Error();
	err.status = 404;
	next(err);
})
app.use((err, req, res, next) => {
	if (err.status != 404) {
		next();
	} else {
		res.send("error");
	}
})
app.listen(12306, () => {
	console.log("run as 12306")
});

function sendLog (req, res, next) {
	console.log(req.url);
	next();
}