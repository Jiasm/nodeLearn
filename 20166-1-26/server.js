"use strict";
var app  = require("express")(),
mongoose = require("mongoose"),
Schema   = mongoose.Schema,
ObjectId = Schema.ObjectId;
mongoose.connect("mongodb://localhost:27017/learn_data_26");

// 模型声明
var Book = new Schema({
	id     : ObjectId,
	name   : String,
	price  : Number,
	render : Array
});


// 注册模型
var Books = mongoose.model("myBook", Book);

// 新增一条记录
new Books({
	name  : "犀牛书",
	price : 998
}).save(err => {
	if (err) {
		console.error(err);
	} else {
		console.log("success");
	}
})
// 获取模型
Books.find({}).exec((err, datas) => {
	if (err) {
		console.error("my", err);
	} else {
		console.log(datas.length);
	}
	process.exit(0);
})