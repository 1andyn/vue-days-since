module.exports = {
  "devServer": {
    "port": 3000
  },
  "configureWebpack": {
    "plugins": [
      {
        "definitions": {
          "$": "jquery",
          "jquery": "jquery",
          "window.jQuery": "jquery",
          "jQuery": "jquery"
        }
      }
    ]
  },
  "transpileDependencies": [
    "vuetify"
  ]
}