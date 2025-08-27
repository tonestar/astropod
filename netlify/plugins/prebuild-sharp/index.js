// Netlify plugin to fix sharp installation
module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log("Installing sharp for linux-x64...");
    try {
      await utils.run.command("npm install --platform=linux --arch=x64 sharp");
      console.log("Successfully installed sharp for linux-x64");
    } catch (error) {
      console.error("Failed to install sharp:", error);
      // Don't fail the build - we'll let the normal build process try to handle it
    }
  },
};
