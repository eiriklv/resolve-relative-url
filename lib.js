'use strict';

var url = require('url');
var pat = /^https?:\/\//i;

exports = module.exports = function(link, source) {
  if (!link) return source;
  if (!source) return;
  return !pat.test(link) ? url.resolve(source, link) : link;
};
