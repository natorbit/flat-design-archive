const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // 1. ADD THE DATE FILTER DEFINITION HERE
    eleventyConfig.addNunjucksFilter("date", (dateObj, format) => {
        // Handle cases where the input might not be a valid date
        if (!dateObj) {
            return "Invalid Date";
        }
        
        let date = DateTime.fromJSDate(dateObj, { zone: "utc" });
        return date.toFormat(format);
    });

    // 2. Add a global utility function to get the current date/time in your templates
    //    This helps fix the 'now' issue you had in your footer.
    eleventyConfig.addGlobalData("date", {
        now: () => new Date(),
    });

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