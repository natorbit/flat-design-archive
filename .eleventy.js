module.exports = function(eleventyConfig) {
  
  // 1. Define the correct path prefix. Hardcoding the path to fix CI/CD inconsistencies.
  const pathPrefix = "/flat-design-archive/";
  
  // 2. Make the pathPrefix available as a variable in all templates ({{ pathPrefix }})
  eleventyConfig.addGlobalData('pathPrefix', pathPrefix);
  
  // 3. Passthrough Copy (Ensure your CSS/JS files are copied)
  // 💥 FINAL, MOST AGGRESSIVE FIX: This tells Eleventy to treat all files/folders 
  // at the root that don't start with '_' or '.' (like 'public') as passthrough assets.
  eleventyConfig.addPassthroughCopy([
    'public', // The public directory at the root
    { './public': 'public' }, // The absolute path
    { './public/**': 'public' } // Including all contents explicitly
  ]);
  
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