'use strict';

module.exports = (gulp, plugins, config) => () => {
    return gulp.src('./images/svg/**/*.svg')
        .pipe(plugins.svgSprite({
            mode: {
                symbol: {
                    dest: `./`, // за что отвечает этот путь?
                    sprite: 'sprite.svg',
                    example: false,
                    render: {
                        scss: {
                            dest: '/sass/_svg_sprite.scss', // как соотносятся эти пути?
                            template: "./images/svg/_svg-sprite-scss-tmpl.txt"
                        }
                    }
                }
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false
            }
        }))
        // .pipe(gulp.dest(`./${config.paths.dist}/${config.output.images}/svg`))
        .pipe(gulp.dest(`./${config.paths.dist}/images/svg`)) // что это за пути
};


var gulp				= require('gulp'),
    svgSprite				= require('gulp-svg-sprite'),

// More complex configuration example
    config = {
        shape : {
            dimension : {			// Set maximum dimensions
                maxWidth : 32,
                maxHeight : 32
            },
            spacing	: {			// Add padding
                padding : 10
            },
            dest : 'out/intermediate-svg'	// Keep the intermediate files
        },
        mode : {
            view : {			// Activate the «view» mode
                bust : false,
                render : {
                    scss : true		// Activate Sass output (with default options)
                }
            },
            symbol : true		// Activate the «symbol» mode
        }
    };

gulp.src('**/*.svg', {cwd: 'path/to/assets'})
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));