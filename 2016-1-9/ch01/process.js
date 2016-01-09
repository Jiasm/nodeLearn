var fs = require("fs");
fs.readdir(process.cwd(), (err, files) => {
	console.log('');

	if(!files.length) {
		return console.log("No file found");
	}

	console.log("Select which file or directory you want to see");

	function file (i) {
		var filename = files[i];

		fs.stat(__dirname + "/" + filename, (err, stat) => {
			if (stat.isDirectory()) {
				console.log(i + "\033[36m" + filename +"\033[39m");
			} else {
				console.log(i + "\033[90m" + filename +"\033[39m");
			}

			i++;
			if (i == files.length) {
				console.log("");
				process.stdout.write("\033[33mEnter your choice: \033[39m");
				process.stdin.resume();
				process.stdin.setEncoding("utf-8");
			} else {
				file(i);
			}
		})
	}
	file(0);
})