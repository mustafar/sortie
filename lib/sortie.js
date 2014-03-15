/*
 * sortie
 * https://github.com/mustafar/sortie
 *
 * Copyright (c) 2014 Mustafa Rizvi
 * Licensed under the MIT license.
 */
'use strict';

var bubble = require('./bubble.js');
var selection = require('./selection.js');
var insertion = require('./insertion.js');
var merge = require('./merge.js');

exports.bubbleSort = bubble.sort;
exports.selectionSort = selection.sort;
exports.insertionSort = insertion.sort;
exports.mergeSort = merge.sort;
