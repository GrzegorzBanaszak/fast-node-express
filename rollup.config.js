const { dts } = require("rollup-plugin-dts");

const config = [
  {
    input: "dist/index.js",
    output: {
      file: "index.js",
    },
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

exports.default = config;
