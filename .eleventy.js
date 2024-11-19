// .eleventy.js
const markdownIt = require('markdown-it');
module.exports = function (eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/styles/**/*.css",
  });
  eleventyConfig.addPassthroughCopy('assets');
  const options = {
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  },
  markdownEngine = markdownIt(options);
};
