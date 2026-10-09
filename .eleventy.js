// .eleventy.js

import markdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

const siteUrl = "https://arpit.tk";

export default async function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", () => ({
    url: siteUrl,
  }));

  const warningThresholdYears = 3;
  eleventyConfig.addGlobalData("warningThresholdYears", warningThresholdYears);

  eleventyConfig.addFilter("isOlderThanYears", (date) => {
    const thresholdMs = warningThresholdYears * 365.25 * 24 * 60 * 60 * 1000;
    return Date.now() - new Date(date).getTime() > thresholdMs;
  });

  // Reload the dev server when Sass writes new CSS
  eleventyConfig.setServerOptions({
    watch: ["_site/styles/**/*.css"],
  });
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 0, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Arpit Batra",
      subtitle: "The personal website and blog of Arpit Batra",
      base: `${siteUrl}/`,
      author: {
        name: "Arpit Batra",
        email: "", // Optional
      },
    },
  });

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
