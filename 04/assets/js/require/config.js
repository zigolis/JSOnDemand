var dataRequire = document.querySelector('body').dataset.require,
         config = {paths: {}, shim: {}},
        modules = [];

// if you want, you can set your shim here, like this:
config.shim = {
  jquery: {
    exports: '$'
  },
  underscore: {
    exports: '_'
  },
  backbone: {
    deps: [
      'underscore',
      'jquery'
    ],
    exports: 'Backbone'
  }
};
