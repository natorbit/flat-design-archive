module.exports = function(eleventyConfig) {
  
  // 1. Define the correct path prefix. Hardcoding the path to fix CI/CD inconsistencies.
  const pathPrefix = "/flat-design-archive/";
  
  // 2. Make the pathPrefix available as a variable in all templates ({{ pathPrefix }})
  eleventyConfig.addGlobalData('pathPrefix', pathPrefix);
  
  // 3. Passthrough Copy (Ensure your CSS/JS files are copied)
  // 💥 FINAL FIX: Explicitly copy the folder located at the project root (./public)
  // to the output root, bypassing any input directory ambiguity.
  eleventyConfig.addPassthroughCopy({ "./public": "public" }); 
  
  // 4. Return the configuration object
  return {
    // CRITICAL: Set the pathPrefix for generated URLs (e.g., pagination, collections)
    pathPrefix: pathPrefix, 
    
    // Define input/output directories
    dir: {
      // FIX: The input is "src" (where templates live)
      input: "src", 
      output: "_site", 
      // FIX: The includes folder is inside "src"
      includes: "_includes"
    },
    
    // Default templating engine settings
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};