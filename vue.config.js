const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],

  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete('svg');
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve('src'),
        '@assets': path.resolve('src/assets'),
        '@components': path.resolve('src/components'),
        '@helpers': path.resolve('src/helpers'),
        '@layout': path.resolve('src/layout'),
        '@mixins': path.resolve('src/mixins'),
        '@plugins': path.resolve('src/plugins'),
        '@store': path.resolve('src/store'),
        '@views': path.resolve('src/views'),
        '@filters': path.resolve('src/filters'),
        '@httpClient': path.resolve('src/httpClient')
      }
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader'
        }
      ]
    }
  },

  css: {
    loaderOptions: {
      scss: {}
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
