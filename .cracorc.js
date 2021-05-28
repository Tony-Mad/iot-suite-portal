const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
    {
      plugin: require('craco-styled-jsx'),
      options: {
        sass: false, // Required node-sass to enable this option
        cssFileSupport: true, // Allow to write css in a standalone file
        cssFileTest: /\.styled\.(s)css$/,
      }
    },
  ],
};
