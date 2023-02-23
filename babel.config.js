module.exports = (api) => {
  const isProduction = api.env("production")

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      [
        "minify",
        isProduction && {
          removeConsole: {
            exclude: ["error", "info"],
          },
        },
      ].filter(Boolean),
    ],
    plugins: [
      [
        "@babel/plugin-transform-typescript",
        {
          "allowNamespaces": true
        }
      ],
    ]
  }
}