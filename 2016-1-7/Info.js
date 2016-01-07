"use strict";
class Info {
	constructor (name) {
		this.name = name;
	}
	sayHi () {
		console.log(`My name is ${this.name}`);
	}
}
module.exports = Info;