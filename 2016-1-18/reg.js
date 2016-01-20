"use strict";
var app = require("express")(),
    bodyParser = require("body-parser"),			// 用来获取post参数
    MongoClient = require("mongodb").MongoClient,	// 连接mongoDB数据库
    url = "mongodb://localhost:27017/submit120";
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
    MongoClient.connect(url, (err, db) => {
    	if (err) {
			res.send(err);
    	} else {
    		db.collection("inserts").insertOne({
    			name: username,
    			pass: password
    		}, (err, r) => {
    			db.close();
    			if (err) {
    				res.send(err);
    			} else {
    				res.render("index");
    			}
    		})
    	}
    })
})
app.post("/", (req, res) => {
    var params = req.body,
        username = params.username,
        password = params.password;
    MongoClient.connect(url, (err, db) => {
    	if (err) {
			res.send(err);
    	} else {
    		db.collection("inserts").find({
    			name: username,
    			pass: password
    		}).toArray((err, items) => {
    			db.close();
    			if (items.length) {
    				res.send(`欢迎：${items[0].name}`);
    			} else {
    				res.send("账号或密码错误");
    			}
    		})
    	}
    })
})
app.listen(233, () => {
    console.log("run as 233");
});
