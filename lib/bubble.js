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
  for (var i = output.length - 1; i > 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (output[j-1] > output[j]) {
        var tmp = output[j-i];
        output[j-1] = output[j];
        output[j] = tmp;
      }
    }
  }
  return output;
};

exports.sort = sort;
