/*
 * sortie
 * https://github.com/mustafar/sortie
 *
 * Copyright (c) 2014 Mustafa Rizvi
 * Licensed under the MIT license.
 */
'use strict';

var merge = function (arr, start, mid, stop) {
  var left = start;
  var right = mid + 1;
  if (arr[mid] <= arr[right]) {
    return;
  }
  while (left <= mid && right <= stop) {
    if ( arr[left] < arr[right]) {
      left++;
    } else {
      var tmp = arr[right];
      for (var k=right; k>left; k--) {
        arr[k] = arr[k-1];
      }
      arr[left] = tmp;
      left++;
      mid++;
      right++;
    }
  }
},

pass = function(arr, start, stop) {
  if (stop > start) {
    var mid = start + Math.floor(((stop - start) / 2));
    pass(arr, start, mid);
    pass(arr, mid + 1, stop);
    merge(arr, start, mid, stop);
  }
},

sort = function(input) {
  var output = input.slice(0);
  pass(output, 0, output.length-1);
  return output;
};

exports.sort = sort;
