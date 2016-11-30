/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
        // paths serve as alias
            'npm:': 'node_modules/',
            'file-saver': 'node_modules/file-saver/'
        },
        // map tells the System loader where to look for things
        map: {
        // our app is within the app folder
            app: 'dist/app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            // sortablejs
            'angular-sortablejs': 'node_modules/angular-sortablejs',
            'sortablejs': 'node_modules/sortablejs/Sortable.js',
            'ng2-auto-complete': 'node_modules/ng2-auto-complete/dist'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-sortablejs': { 
                main: 'index.js', 
                defaultExtension: 'js' 
            },
            'ng2-auto-complete': { 
                main: 'ng2-auto-complete.umd.js', 
                defaultExtension: 'js' 
            },
            'file-saver': { 
                main: 'FileSaver.min.js', 
                defaultExtension: 'js' 
            }
        }
    });
})(this);
