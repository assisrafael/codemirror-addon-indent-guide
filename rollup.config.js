import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/indent-guides.js",
  output: {
    file: "dist/main.js",
    format: "umd",
  },
  plugins: [
    resolve({
      extensions: [".mjs", ".js", ".json", ".jsx"],
    }),
    babel({
      exclude: "node_modules/**", // only transpile our source code
    }),
  ],
  external: ["codemirror"],
};
