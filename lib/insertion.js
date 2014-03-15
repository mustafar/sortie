/*
 * sortie
 * https://github.com/mustafar/sortie
 *
 * Copyright (c) 2014 Mustafa Rizvi
 * Licensed under the MIT license.
 */
'use strict';

var sort = function(input) {
  var output = input.slice(0);
  for (var i = 1; i < output.length; i++) {
    var toInsert = output[i];
    for (var j = 0; j < i; j++) {
      if (output[j] > toInsert) {
        break;
      }
    }
    for (var k = i; k > j; k--) {
      output[k] = output[k-1];
    }
    output[j] = toInsert;
  }
  return output;
};

exports.sort = sort;
