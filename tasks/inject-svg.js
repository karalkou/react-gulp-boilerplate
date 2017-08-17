'use strict';

module.exports = (gulp, plugins, config) => () => {
    return gulp.src(config.paths.html)
        .pipe(plugins.injectPartials())
        .pipe(gulp.dest('./'));
};
