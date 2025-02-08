// .eleventy.js

import markdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
export default async function (eleventyConfig) {
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

    markdownEngine.use(
    await Shiki({
      theme: "everforest-dark",
    })
  );

  eleventyConfig.setLibrary("md", markdownEngine);
}
