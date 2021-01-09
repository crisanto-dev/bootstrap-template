let mix = require('laravel-mix');


mix.sass('resources/scss/bootstrap.scss', 'public/css')
    .copy('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/js');
