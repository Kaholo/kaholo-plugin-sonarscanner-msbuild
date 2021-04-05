const child_process = require("child_process");

async function runSonarMsCmd(args, action, settings) {
    const login = settings.login || action.params.login;
	const path = (action.params.projectPath || "").trim();
    if (!login || !path){
        throw "One of required parameters was not provided!";
    }
    args.push(`/d:sonar.login=${login}`); // add login argumant to args
    const exePath = (settings.exePath || "SonarScanner.MSBuild.exe").trim();
    return new Promise((resolve, reject) => {
		child_process.execFile(exePath, args, {cwd: path}, function(error, stdout, stderr){
		   if (error){
			   return reject(error);
		   }
		   if (stderr){
			   console.log(stderr);
		   }
		   return resolve(stdout);
		});
	});
}

module.exports = {
    runSonarMsCmd
}