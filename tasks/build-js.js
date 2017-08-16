'use strict';

const webpackStream = require('webpack-stream');
const webpackConfig = require('./configs/webpack.config');

/* NB! there could be troubles if one wants to use much more webpack opts (like chunks etc). Watch Ilya Kantor gulp */
module.exports = (gulp, plugins, config) => () => {
  return gulp.src(config.paths.js)
    .pipe(webpackStream(webpackConfig))
    .pipe(plugins.rename('bundle.js'))
    .pipe(gulp.dest(`${config.paths.dist}/${config.output.js}`))
};
