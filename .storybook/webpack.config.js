/**
 * Created by ofersarid on 19/05/2017.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const scssExtract = new ExtractTextPlugin('[name]-[hash].css');
const path = require('path');

const uiComponentsPath = path.resolve(__dirname, '../node_modules/@recongate/rg-ui-components/dist/index.js');
const uiConfigPath = path.resolve(__dirname, '../node_modules/@recongate/rg-ui-components/src/config.js');
const uiSocketMiddlewarePath = path.resolve(__dirname, '../node_modules/@recongate/rg-ui-components/src/socketMiddleware.js');
const ceInvestigationPath = path.resolve(__dirname, '../node_modules/@recongate/investigation/dist/index.js');
const collectionTasksUiPath = path.resolve(__dirname, '../node_modules/@recongate/collection-tasks/dist/index.js');
const insigtsUiPath = path.resolve(__dirname, '../node_modules/@recongate/insights/dist/index.js');
const casesUiPath = path.resolve(__dirname, '../node_modules/@recongate/fe-cases/dist/index.js');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        loader: 'url-loader?limit=10000',
        include: path.resolve (__dirname, '../')
      },
      {
        test: /\.css$/,
        use: scssExtract.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(woff2?|ttf|svg|eot|jpg|png|gif)?(\?.+)?$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'rg-ui-components': uiComponentsPath,
      'ui-config': uiConfigPath,
      'ce-insights': insigtsUiPath,
      'ce-investigation': ceInvestigationPath,
      'collection-tasks': collectionTasksUiPath,
      'ui-socket-middleware': uiSocketMiddlewarePath,
      'ce-cases': casesUiPath,
    }
  }
};
