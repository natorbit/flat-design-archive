module.exports = function(eleventyConfig) {
  
  // 1. Define the correct path prefix. Hardcoding the path to fix CI/CD inconsistencies.
  // This must match your GitHub Pages repository subpath exactly: /repo-name/
  const pathPrefix = "/flat-design-archive/";
  
  // 2. Make the pathPrefix available as a variable in all templates ({{ pathPrefix }})
  eleventyConfig.addGlobalData('pathPrefix', pathPrefix);
  
  // 3. Passthrough Copy (Ensure your CSS/JS files are copied)
  // Assuming your assets are in a folder named 'public' which is often outside 'src'
  // If 'public' is inside 'src', change the path to "src/public"
  eleventyConfig.addPassthroughCopy("public"); 
  
  // 4. Return the configuration object
  return {
    // CRITICAL: Set the pathPrefix for generated URLs (e.g., pagination, collections)
    pathPrefix: pathPrefix, 
    
    // Define input/output directories
    dir: {
      // 💥 FIX 1: Change input from "." to "src"
      input: "src", 
      output: "_site", 
      // 💥 FIX 2: Set includes to "_includes" relative to the new input directory ("src")
      includes: "_includes"
    },
    
    // Default templating engine settings
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};