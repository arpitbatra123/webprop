// .eleventy.js

module.exports = function (eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/styles/**/*.css",
  });
  eleventyConfig.addPassthroughCopy('assets');
};
