requirejs.config({
  baseUrl: 'libs',
  shim: {
    'jquery-3.2.1.min': {
      deps: ['underscore-min', 'jquery-3.2.1.min'],
      exports: 'Backbone'
    },
    'underscore-min': {
      exports: '_'
    },
    'jquery-3.2.1.min': {
      exports: '$'
    }
  }
});

requirejs(['jquery-3.2.1.min'], function($) {
  $('body').html('Hello World .... Again!');
});