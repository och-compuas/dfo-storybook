// load the default config generator.
var join = require("path").join;
var root = join(__dirname, "..");

module.exports = ({mode, config}) => {
  // Find a rule that matches a file with the scss extension
  const sassRule = config.module.rules.find(rule =>
    "apekatt.scss".match(rule.test)
  );

  // Add sass-resource-loader to style rule
  // .use is used when npm run dev
  // .loader is used when npm run build
  const loaderList = sassRule.use || sassRule.loader;
  loaderList.push({
    loader: "sass-resources-loader",
    options: {
      resources: [
        join(root, "./sass/reset.scss"),
        join(root, "./sass/fonts.scss")
      ]
    }
  });

  config.output.publicPath = '/';

  return config;
};
