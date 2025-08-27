const { execSync } = require("child_process");

module.exports = {
  onPreBuild: ({ utils }) => {
    try {
      console.log("Installing sharp for linux...");

      // Remove any existing sharp installation
      console.log("Removing existing sharp installation...");
      execSync("rm -rf node_modules/*sharp*");

      // Install sharp specifically for linux
      console.log("Installing sharp for linux-x64...");
      execSync("npm install sharp --platform=linux --arch=x64 --no-save");

      console.log("Sharp installation complete");
    } catch (error) {
      console.error("Error installing sharp:", error);
      utils.build.failBuild("Failed to install sharp properly");
    }
  },
};
