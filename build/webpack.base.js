const path = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');
const cls = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const pxtorem = require('postcss-pxtorem');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir = '.') {
  return path.join(__dirname, '..', dir);
}

const rootPath = resolve('.');
const srcPath = resolve('src');
const faviconPath = resolve('src/assets/favicon.ico');
const buildPath = resolve('dist');
const nodeModulesPath = resolve('node_modules');

module.exports = {
  context: rootPath,
  output: {
    // 无论 path 是什么, dev 环境的 `index.html` 所引用的 js 路径都是 文件名而已(即与 path 完全无关. 只与
    // filename 字段有关而已)
    path: buildPath,
    publicPath: '/',
    filename: 'js/[name]__[hash:16].bundle.js',
    chunkFilename: 'js/[name]__[hash:16].bundle.js'
  },
  resolve: {
    modules: ['node_modules', nodeModulesPath],
    enforceExtension: false,
    enforceModuleExtension: false,
    extensions: [
      '.js',
      '.vue',
      '.jsx',
      '.scss',
      '.css',
      '.jpg',
      '.png',
      '.gif',
      '.svg',
      '.webpack.js',
      '.web.js',
      '.ts',
      '.tsx'
    ],
    alias: {
      '@': resolve('src'),
      SRC: resolve('src'),
      ASSETS: resolve('src/assets'),
      COMPONENTS: resolve('src/components'),
      ACTIONS: resolve('src/actions'),
      CONSTANTS: resolve('src/constants'),
      CONTAINERS: resolve('src/containers'),
      MIDDLEWARE: resolve('src/middleware'),
      REDUCERS: resolve('src/reducers'),
      STORE: resolve('src/store'),
      ROUTES: resolve('src/routes'),
      VIEWS: resolve('src/views')
    }
  },
  resolveLoader: {
    modules: ['node_modules', nodeModulesPath]
    // moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        // include: srcPath,
        exclude: /(node_modules|\.global\.css)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                namedExport: true,
                camelCase: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'typed-css-modules-loader',
              options: {
                camelCase: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1
              }
            }
          ]
          // loader:
          // 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]__
          // _ [hash:base64:5]!postcss-loader',
        })
      },
      {
        test: /\.global.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'typed-css-modules-loader',
              options: {
                camelCase: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1
              }
            }
          ]
          // loader:
          // 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]__
          // _ [hash:base64:5]!postcss-loader',
        })
      },
      {
        test: /\.(scss|sass)$/,
        include: srcPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                namedExport: true,
                camelCase: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'typed-css-modules-loader',
              options: {
                camelCase: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(scss|sass)$/,
        include: nodeModulesPath,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        include: srcPath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                namedExport: true,
                camelCase: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'typed-css-modules-loader',
              options: {
                camelCase: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.less$/,
        include: [nodeModulesPath],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['vue-html-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: srcPath,
        exclude: nodeModulesPath,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: 'images/[name]-[hash].[ext]'
            }
          }
        ]
      },

      // font-awesome
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [srcPath, nodeModulesPath],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              minetype: 'application/font-woff',
              name: 'fonts/[name].[ext]?[hash]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [srcPath, nodeModulesPath],
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: rootPath,
        postcss() {
          return [
            cls(),
            cssnext({ flexbox: true, browsers: ['last 10 versions'] }),
            customProperties()
            // pxtorem({rootValue: 100, propWhiteList: []})
          ];
        }
      },
      eslint: {
        formatter: require('eslint-friendly-formatter')
      },
      vue: {
        loaders: {
          // postcss: [require('autoprefixer')({flexbox: true, browsers: ['last 3
          // versions']})],
          postcss() {
            return [
              customMedia(),
              cssnext({ flexbox: true, browsers: ['last 10 versions'] }),
              customProperties()
              // pxtorem({rootValue: 100, propWhiteList: []})
            ];
          },
          css: ExtractTextPlugin.extract({
            use: ['css-loader', 'postcss-loader'],
            fallback: 'vue-style-loader'
          }),
          scss: ExtractTextPlugin.extract({
            use: ['css-loader', 'postcss-loader', 'sass-loader'],
            fallback: 'vue-style-loader'
          }),
          sass: ExtractTextPlugin.extract({
            use: ['css-loader', 'postcss-loader', 'sass-loader'],
            fallback: 'vue-style-loader'
          })
        }
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      allChunks: true
    })
  ]
};
