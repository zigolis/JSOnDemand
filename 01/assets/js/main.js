var dataRequire = document.querySelector('body').dataset.require,
         config = {paths: {}, shim: {}},
        modules = [];

modules = [
  {
    module  : 'cart',
    path    : 'cart/cart',
    require : 'cart'
  },
  {
    module  : 'home',
    path    : 'home/home',
    require : 'home'
  }
];

(function() {
  if (dataRequire) {
    // get modules[] && set config.paths{}
    for (i = 0; i < modules.length; i++) {
      config.paths[modules[i].module] = modules[i].path;
    }

    // set requirejs config
    require.config(config);

    // get data-require && require it
    for (var i = 0; i < modules.length; i++) {
      if (dataRequire.trim() === modules[i].require) {
        require([modules[i].module]);
      }
    }
  }
})();
