const { runSonarMsCmd } = require("./helpers");

async function execBegin(action, settings) {
    const projKey = (action.params.projectKey || "").trim();
    const hostUrl = (action.params.hostUrl || settings.hostUrl || "").trim();
    if (!projKey || !hostUrl){
        throw "One of required parameters was not provided!";
    }
    const projName = (action.params.projectName || "").trim();
    const projVer = (action.params.projectVer || "").trim();
    const extraArgsStr = (action.params.args || "").trim();

    let args = [
        "begin", 
        `/k:${projKey}`, 
        `/d:sonar.host.url=${hostUrl}`
    ];
    if (projName) args.push(`/n:${projName}`);
    if (projVer) args.push(`/v:${projVer}`);
    if (extraArgsStr) {
        const extraArgs = extraArgsStr.split("\n").map(arg => arg.trim()).filter(arg => arg);
        args = args.concat(extraArgs);
    }
    return runSonarMsCmd(args, action, settings);
}

async function execEnd(action, settings) {
    let args = ["end"];
    return runSonarMsCmd(args, action, settings);
}

module.exports = {
    execBegin,
    execEnd
}