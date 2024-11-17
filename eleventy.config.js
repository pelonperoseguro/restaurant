import Nunjucks from "nunjucks";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.setServerOptions({
    port: 7777,
    showAllHosts: true,
  })
}

export const config = {
  dir: {
    input: "src",
    output: "docs",
  },
};
