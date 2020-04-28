const path = require("path");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["**/*.liquid"],
  whitelist: ["is-active", "is-expanded-on-mobile", "has-reached-main"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    require("postcss-import")(),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
