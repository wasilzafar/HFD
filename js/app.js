requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/libs',
    paths: {
    'jquery': 'jquery-3.2.1.min',
	'underscore': 'underscore-min',
	'angular': 'angular.min',
	'backbone': 'backbone-min'
    }
});

// Start the main app logic.
requirejs(['jquery'],
function($) {
    $('body').html('Hello World !');
});