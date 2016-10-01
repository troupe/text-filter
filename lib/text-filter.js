 /*jshint globalstrict:true, trailing:false, unused:true, node:true */
'use strict';

// From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function createRegExpsForQuery(queryText) {
  var normalized = ("" + queryText).trim().toLowerCase();
  var parts = normalized.split(/[\s\'']+/)
                        .filter(function(s) { return !!s; })
                        .filter(function(s, index) { return index < 10; } );

  return parts.map(function(i) {
    return new RegExp("(^|\\b|\\s)" + escapeRegExp(i), "i");
  });
}

function getFields(fields, item) {
  return fields.map(function(field) { return item[field]; }).filter(function(f) { return !!f; });
}

module.exports = function createTextFilter(options) {
  function nopFilter() {}
  var query = options.query;
  var fields = options.fields;

  if(!query) return nopFilter;

  var regexps = createRegExpsForQuery(query);

  return function(item) {
    // Search the items or its fields
    var searchable =  fields ? getFields(fields, item) : [item];
    return searchable.some(function(item) {
      return regexps.every(function(regexp) {
        var convertedItem = item.toString();
        return convertedItem.match(regexp);
      });
    });
  };

};
