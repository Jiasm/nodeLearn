"use strict";
var EventEmitter = require("events").EventEmitter,
    myEvent = new EventEmitter,
    callback = () => {
        console.log("call is call");
    };
myEvent.on("call", callback);
console.log("reg emit");
setTimeout(() => {
    myEvent.emit("call");
}, 4000)
setTimeout(() => {
	console.log("remove emit");
    myEvent.removeListener("call", callback);
}, 2000)
myEvent.once("once", () => {
	console.log("only once");
});
myEvent.emit("once");
myEvent.emit("once");
myEvent.emit("once");