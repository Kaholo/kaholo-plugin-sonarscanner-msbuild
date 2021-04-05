# kaholo-plugin-sonarscanner-msbuild
SonarScanner MSBuild Plugin for Kaholo

## How To Use
After installing the plugin on your Kaholo Server, make sure that the SonarScanner.MSBuild.exe tool is installed on your Kaholo agent. You can specify the path to the exe file in the settings.

## Settings
1. SonarScanner MSBuild exe Path (String) **Optional** - The path to the exe file of SonarScanner MSBuild. Default is "SonarScanner.MSBuild.exe" which only works if this command is in your OS path.
2. Host URL (String) **Optional** - The URL of your default Sonnar Scanner host.
3. CLI Token (Vault) **Optional** - The token to authenticate with to your default user from the CLI.

## Method: Begin
Runs SonarScanner MSBuild begin command. Hooks into the build pipeline, downloads SonarQube quality profiles and settings and prepares your project for the analysis.

### Parameters
1. Project Key (String) **Required** -  The key of the project to analyze in SonarQube.
2. Project Path (String) **Required** -  The path of the root directory of the project to analyze.
3. Project Name (String) **Optional** -  The name of the project to analyze in SonarQube. Adding this argument will overwrite the project name in SonarQube if it already exists.
4. Project Version (String) **Optional** -  The version of your project.
5. Host URL (String) **Optional** - The URL of the Sonnar Scanner server that hosts the project to analyze. Required in case default host URL was not provided in the settings.
6. CLI Token (Vault) **Optional** - The token to authenticate with to your user from the CLI when running this command.

## Method: End
Runs SonarScanner MSBuild end command. Cleans the MSBuild/dotnet build hooks, collects the analysis data generated by the build, the test results, the code coverage and then uploads everything to SonarQube.

### Parameters
1. Project Path (String) **Required** -  The path of the root directory of the project to analyze.
2. CLI Token (Vault) **Optional** - The token to authenticate with to your user from the CLI when running this command.