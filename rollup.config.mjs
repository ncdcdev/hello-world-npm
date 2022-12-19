// minifyに用
import { terser as pluginTerser } from 'rollup-plugin-terser';
// typescript用
import pluginTypescript from '@rollup/plugin-typescript';
// CommonJS用
import pluginCommonjs from '@rollup/plugin-commonjs';
// サードパーティライブラリ用
import pluginNodeResolve from '@rollup/plugin-node-resolve';
// トランスパイル用
import { babel as pluginBabel } from '@rollup/plugin-babel';
import * as path from 'path';
// 型定義用
import dts from 'rollup-plugin-dts'

import pkg from './package.json' assert { type: "json" };

import { fileURLToPath } from 'node:url'


// モジュール名
const moduleName = pkg.name.replace(/^@.*\//, '');
// エントリーとなるファイル名
const inputFileName = 'src/index.ts';

// ライセンス表記用のバナー
const banner = `
  /**
   * @license
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} License.
   */
`;

export default [
  // ブラウザ用の設定
  {
    input: inputFileName,
    output: [
      // uncompressed
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner
      },
      // minified
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [
          pluginTerser(),
        ],
      }
    ],
    plugins: [
      pluginTypescript(),
      // dts({
      //   input: './dist/index.d.ts',
      // }),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(
          path.dirname(fileURLToPath(import.meta.url))
          , '.babelrc.js'),
      }),
      pluginNodeResolve({
        // ブラウザ向けにバンドルする
        browser: true,
      }),
    ],
  },

  // ES Module用の設定
  {
    input: inputFileName,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      // dts(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(
          path.dirname(fileURLToPath(import.meta.url))
          , '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS用の設定
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'auto',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      // dts(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(
          path.dirname(fileURLToPath(import.meta.url))
          , '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
  // {
  //   // path to your declaration files root
  //   input: './dist/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'es' }],
  //   plugins: [dts()],
  // },
];