'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    path.resolve(__dirname, 'app/index.js'),
    path.resolve(__dirname, 'app/static/manifest.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },

      {
        test: /\.vue$/,
        use: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },

      {
        test: /\.svg$/,
        use: 'url-loader?limit=102400&name=[name]-[hash:base64].[ext]',
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve('./app/components/'),
      path.resolve('./node_modules/')
    ],

    alias: {
      'vue$': 'vue/dist/vue.common.js' // VueJS standalone
    },

    // So that we can import components without their index.vue files
    extensions: ['.js', '.css', '.vue']
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: NODE_ENV == 'production',
    port: 3000
  }
}
