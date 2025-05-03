module.exports = function override(config) {
  // Find the rule for images
  const rules = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf;
  const imageRule = rules.find((rule) => rule.test && rule.test.toString().includes("png|jpe?g|gif"));

  // Modify the rule to disable inlining (remove the data URL behavior)
  if (imageRule) {
    imageRule.use = [
      {
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ];
  }

  return config;
};
