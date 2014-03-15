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
  for (var i = 0; i < output.length - 1; i++) {
    var minPos = i;
    for (var j = i+1; j < output.length; j++) {
      if (output[minPos] > output[j]) {
        minPos = j;
      }
    }
    var tmp = output[i];
    output[i] = output[minPos];
    output[minPos] = tmp;
  }
  return output;
};

exports.sort = sort;
