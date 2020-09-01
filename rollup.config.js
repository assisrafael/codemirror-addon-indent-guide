import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/indent-guide.js',
  output: {
    file: 'dist/indent-guide.js',
    format: 'umd',
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
  external: ['codemirror'],
};
