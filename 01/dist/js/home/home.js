define(
  'home', [],
  function () {
    'use strict';

    var Home = function() {
      document.querySelector('h1').innerHTML = '/#!/home on demand!!!';
    }

    return new Home;
});
