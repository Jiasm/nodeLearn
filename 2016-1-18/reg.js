"use strict";
var express = require("express"),
    bodyParser = require("body-parser"),	// 用来获取post参数
    mongodb = require("mongodb"),
    app = express();
app.set("view engine", "ejs");
app.set("views", __dirname);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/reg", (req, res) => {
    res.render("reg");
})
app.post("/reg", (req, res) => {
    var params = req.body,
        username = params.username,
        password = params.password;
    console.log(`
		username: ${username}
		password: ${password}
	`);
    res.send("");
})
app.listen(233, () => {
    console.log("run as 233");
});
