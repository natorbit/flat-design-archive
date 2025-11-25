// .eleventy.js

module.exports = function(eleventyConfig) {

    // 1. CONDITIONAL PATH VARIABLE FIX
    const IS_PRODUCTION = process.env.NODE_ENV === "production";

    // Set 'baseurl' to the repo name for GitHub, or empty string locally
    eleventyConfig.addGlobalData('pathPrefix', '/flat-design-archive/');

    // 2. PASSTHROUGH COPY
    eleventyConfig.addPassthroughCopy("public");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};