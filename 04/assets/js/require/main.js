// get modules[] && set config.paths{}
for (var i = 0; i < modules.length; i++) {
  config.paths[modules[i].module] = modules[i].path;
}

// set requirejs config
require.config(config);
require(
  [
    'general'
  ],
  function(General) {
    if (dataRequire) {
      // get data-require && require it
      for (var i = 0; i < modules.length; i++) {
        if (dataRequire.trim() === modules[i].require) {
          require([modules[i].module]);
        }
      }
    }
  }
);
