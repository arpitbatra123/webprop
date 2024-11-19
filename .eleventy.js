// .eleventy.js

import markdownIt from "markdown-it";
export default function (eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/styles/**/*.css",
  });
  eleventyConfig.addPassthroughCopy("assets");
  const options = {
      html: true,
      breaks: true,
      linkify: false,
      typographer: true,
    },
    markdownEngine = markdownIt(options);
  eleventyConfig.setLibrary("md", markdownEngine);
};
