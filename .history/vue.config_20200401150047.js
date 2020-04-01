const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

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
  }
}
