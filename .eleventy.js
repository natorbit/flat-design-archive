module.exports = function(eleventyConfig) {
  
  // 1. Define the correct path prefix based on the environment
  // The repository name MUST match exactly, including casing:
  const repoName = "flat-design-archive";
  
  // If we are running in production (GitHub Actions), use the subfolder path,
  // otherwise, use the root path for local development.
  const pathPrefix = process.env.NODE_ENV === 'production' 
    ? `/${repoName}/` 
    : `/`;

  // 2. Make the pathPrefix available as a variable in all templates ({{ pathPrefix }})
  eleventyConfig.addGlobalData('pathPrefix', pathPrefix);
  
  // 3. Passthrough Copy (Ensure your CSS/JS files are copied)
  // Assuming your assets are in a folder named 'public'
  eleventyConfig.addPassthroughCopy("public"); 
  
  // 4. Return the configuration object
  return {
    // CRITICAL: Set the pathPrefix for generated URLs (e.g., pagination, collections)
    pathPrefix: pathPrefix, 
    
    // Define input/output directories
    dir: {
      input: ".", 
      output: "_site", 
      includes: "_includes"
    },
    
    // Default templating engine settings
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};