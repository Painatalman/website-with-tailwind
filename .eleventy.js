const { plugins } = require("./postcss.config.js");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const postcss = require("postcss");

const PUBLIC_URL = "/website-with-tailwind";

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("postcss", async () => {
    const src = resolve(__dirname, "style.css");
    const rawPostCSS = readFileSync(src);

    return await postcss(plugins).process(rawPostCSS, { from: src });
  });
  eleventyConfig.addShortcode("static", (resourcePathFromRoot) => {
    const root = process.env.NODE_ENV === "production" ? PUBLIC_URL : "";
    return `${root}/${resourcePathFromRoot}`;
  });

  eleventyConfig.addPassthroughCopy("imgs");
  eleventyConfig.addPassthroughCopy("index.js");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });
};
