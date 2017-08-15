'use strict';

const bs = require('browser-sync').create();

module.exports = (gulp, plugins, config) => () => {
  bs.init({ server: './public' })
  bs.watch('./public/**/*.*').on('change', bs.reload);
};
