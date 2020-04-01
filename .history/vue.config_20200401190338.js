const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  devServer: {
    before: function (app, server) {
      app.get('/some/path', function (req, res) {
        res.json({
          code: 200,
          data: seller
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          code: 200,
          data: goods
        })
      })
      app.get('/api/ratings', function (req, res) {
        res.json({
          code: 200,
          data: ratings
        })
      })
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  }
}
