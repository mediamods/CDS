import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
// import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

// import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

const defCompExport = {
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    //this seems to work for our purposes...
    nodeResolve({
      extensions: [".jsx"]
    }),
    babel({
      "exclude": 'node_modules/**',
      "babelHelpers": "bundled",
      "presets": [
        [
          "@babel/preset-react", {
            "runtime": "automatic"
          }
        ],
        "@babel/preset-env"
      ]
    }),
    postcss({
      // minimize: true,
      plugins: [
        tailwindcss,
        //todo .. upgrade when we can one day...
        //https://github.com/parcel-bundler/parcel/issues/5160 
        autoprefixer,
      ]
    }),
    url(),
    // svgr({
    //   //uggggggh
    //   //https://github.com/gregberge/svgr/issues/307
    //   svgoConfig: {
    //     plugins: [{ prefixIds: false }],
    //   },
    // }),
    terser()
  ],
  external: [
    'clsx',
    '@headlessui',
    'react',
    'react-dom'
  ]
};

export default [

  Object.assign( {
    input: 'pages/api/Catalog-framer.js',
    output: {
      file: 'lib/Catalog.js',
      format: 'esm'
    } }, defCompExport
  ),

  Object.assign( {
    input: 'pages/api/IconButton-framer.js',
    output: {
      file: 'lib/IconButton.js',
      format: 'esm'
    } }, defCompExport
  ),

  Object.assign( {
    input: 'pages/api/InfoCard-framer.js',
    output: {
      file: 'lib/InfoCard.js',
      format: 'esm'
    } }, defCompExport
  ),

  Object.assign( {
    input: 'pages/api/Logo-framer.js',
    output: {
      file: 'lib/Logo.js',
      format: 'esm'
    } }, defCompExport
  ),
  
  Object.assign( {
    input: 'pages/api/Menu-framer.js',
    output: {
      file: 'lib/Menu.js',
      format: 'esm'
    } }, defCompExport
  ),
  
  Object.assign( {
    input: 'pages/api/PillButton-framer.js',
    output: {
      file: 'lib/PillButton.js',
      format: 'esm'
    } }, defCompExport
  ),

  Object.assign( {
    input: 'pages/api/RoundButton-framer.js',
    output: {
      file: 'lib/RoundButton.js',
      format: 'esm'
    } }, defCompExport
  ),

  Object.assign( {
    input: 'pages/api/TextHeading-framer.js',
    output: {
      file: 'lib/TextHeading.js',
      format: 'esm'
    } }, defCompExport
  ),

  Object.assign( {
    input: 'pages/api/TextParagraph-framer.js',
    output: {
      file: 'lib/TextParagraph.js',
      format: 'esm'
    } }, defCompExport
  ),

];
