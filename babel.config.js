module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo']
   // "presets": [ "es2015", "react" ]
  }
};