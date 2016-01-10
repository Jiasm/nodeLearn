"use strict";
require("http").createServer((req, res) => {
    var html = '';
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    if (req.url === "/") {
        html = `
    		<h1>hello</h1>
    		<form action='submit' method='post'>
    			<p>
    				<label>Name
    				<input name='name' /></label>
    			</p>
    			<p>
    				<label>Pass
    				<input name='pass' type='password' /></label>
    			</p>
    			<button>
    				login
    			</button>
    		</form>
    	`;
        res.end(html);
    } else if (req.url === "/submit") {
        let data = '';
        req.on("data", flag => {
            data += flag;
        })
        req.on("end", () => {
        	let parm = require("url").parse("?" + data, true).query;
            html = `
	    		Welcome：
	    		Name： ${parm.name}
	    		Pass： ${parm.pass}
	    	`;
        	res.end(html);
        })
    }
}).listen(12306, () => {
    console.log("connection is run on 12306")
});