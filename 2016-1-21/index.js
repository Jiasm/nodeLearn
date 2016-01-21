"use strict";
var app = require("express")(),
    mongodb = require("mongodb"),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    MongoClient = mongodb.MongoClient,
    mongoUrl = "mongodb://localhost:27017/demo21";

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get(["/", "/index"], (req, res) => {
    if (session.login) {
        res.render("index", {
            user: session.login
        })
    } else {
        res.render("switch");
    }
});

app.get("/login", (req, res) => {
    res.render("login");
})
app.post("/login", (req, res, next) => {
    MongoClient.connect(mongoUrl, (err, db) => {
    	if (err) {
    		return next(err);
    	} else {
    		let info = db.collection("userInfo"),
    			myInfo = info.findOne(req.body.user, (err, data) => {
    				if (err) {
    					return next(err);
    				} 
    				if (!data) {
    					res.render("switch");
    				}
    				session.login = data.username;
    				res.redirect("/");
    			});
    	}
    })
})
app.get("/signin", (req, res) => {
    res.render("signin");
})
app.post("/signin", (req, res, next) => {
    MongoClient.connect(mongoUrl, (err, db) => {
        if (err) {
            return next(err);
        } else {
        	let info = db.collection("userInfo");
            info.insertOne(req.body.user, (err, r) => {
                if (err) {
                    return next(err);
                } else {
                    res.render("login");
                }
                db.close();
            })
        }
    })
})
app.get("/logout", (req, res) => {
	delete session.login;
	res.redirect("/");
})
app.listen(12306, () => {
    console.log("run as 12306");
})
