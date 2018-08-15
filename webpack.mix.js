let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
        "public/assets/admin/plugins/bootstrap/js/bootstrap.js",
        "public/assets/admin/js/app.js"
		],'public/js/login.min')
	.js([
        "public/assets/admin/plugins/bootstrap/js/bootstrap.js",
        "public/assets/admin/js/app.js"
		],'public/js/dashboard.min')
    .js([
        "public/assets/admin/plugins/bootstrap/js/bootstrap.js",
        "public/assets/admin/plugins/bootstrap.datepicker/js/bootstrap-datepicker.min.js",
        "public/assets/admin/plugins/custom.fle_upload.js",
        "public/assets/admin/js/app.js",
        "public/assets/admin/js/content.js"
        ],'public/js/content.min')
	.js([
        "public/assets/web/js/jquery1.7.2.min.js",
        "public/assets/web/js/contact-us.js",
        "public/assets/web/js/script.js",
		],'public/js/common.min')
   .sass("public/assets/admin/css/sass/dashboard.scss", 'public/css/admin/styles.min.css')
   .sass("public/assets/web/css/styles.scss", 'public/css/styles.min.css')
   ;
