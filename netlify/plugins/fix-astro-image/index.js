const fs = require("fs");
const path = require("path");

module.exports = {
  onPreBuild: ({ utils }) => {
    try {
      console.log("Updating Astro config to disable sharp...");

      // Path to the astro.config.mjs file
      const configPath = path.join(process.cwd(), "astro.config.mjs");

      // Read the current config
      let configContent = fs.readFileSync(configPath, "utf8");

      // Replace the image integration with a more compatible version
      const updatedConfig = configContent.replace(
        /image\({[^}]*serviceEntryPoint: ["']@astrojs\/image\/sharp["'][^}]*}\)/gs,
        `image()`
      );

      // Write the updated config
      fs.writeFileSync(configPath, updatedConfig);

      console.log("Astro config updated successfully");
    } catch (error) {
      console.error("Error updating Astro config:", error);
      utils.build.failBuild("Failed to update Astro config");
    }
  },
};
