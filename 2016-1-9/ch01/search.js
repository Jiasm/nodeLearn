var fs = require("fs"),
    stdin = process.stdin,
    stdout = process.stdout;

function getFiles(fName) {
    fs.readdir(fName, (err, files) => {
        var stats = [];
        console.log('');

        if (!files.length) {
            return console.log("No file found");
        }

        console.log("Select which file or directory you want to see");

        function file(i) {
            var filename = files[i];

            fs.stat(`${fName}/${filename}`, (err, stat) => {
            	if (err) {
            		return console.error(err);
            	}
                stats.push(stat);
                if (stat.isDirectory()) {
                    console.log(i + "\033[36m" + filename + "\033[39m");
                } else {
                    console.log(i + "\033[90m" + filename + "\033[39m");
                }

                if (++i == files.length) {
                    read();
                } else {
                    file(i);
                }
            })

            function read() {
                console.log("");
                stdout.write("\033[33mEnter your choice: \033[39m");
                stdin.resume();
                stdin.setEncoding("utf-8");
                stdin.on("data", option)
            }

            function option(data) {
                var name = files[+data];
                if (!name) {
                    stdout.write("\033[31mEnter your choice: \033[39m");
                } else {
                    if (stats[+data].isDirectory()) {
                    	stdin.removeListener("data", option);
                        getFiles(`${fName}/${name}`);
                    } else {
                        stdin.pause();
                        fs.readFile(`${fName}/${name}`, "utf-8", (err, data) => {
                        	if (err) {
                        		return console.error(err);
                        	}
                            console.log(data.replace(/(.*)/g, "    $1"));
                        })
                    }
                }
            }
        }

        file(0);
    })
}
getFiles(process.cwd());
