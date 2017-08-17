'use strict';

const gulpLoadPluginsOptions = {
    pattern: '*',
    scope: ['devDependencies']
};

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')(gulpLoadPluginsOptions);
const config = require('./tasks/configs/main.config');
const register = require(`./tasks/utils/register`);           //lazyRequireTask in Kantor's gulp screencast

register(gulp, plugins, config)({
    'build:scss': 'build-scss',
    'build:js': 'build-js',
    'build:svg': 'build-svg',
    'lint:scss': 'lint-scss',
    'inject:svg': 'inject-svg',
    'copy': 'copy',
    'watch': 'watch',
    'serve': 'serve'
});

gulp.task('build', gulp.parallel('build:js', 'build:svg', /*'inject:svg',*/ 'build:scss', 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));