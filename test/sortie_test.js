'use strict';

var sortie = require('../lib/sortie.js');

function isSorted(arr) {
  var sortStatus = true;
  for(var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      sortStatus = false;
      break;
    }
  }
  return sortStatus;
}

exports['num sorting'] = {
  setUp: function(done) {
    this.inputNum = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];
    done();
  },
  'bubble': function(test) {
    test.expect(2);
    
    var output = sortie.bubbleSort(this.inputNum);
    test.equal(this.inputNum.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
  'selection': function(test) {
    test.expect(2);
    
    var output = sortie.selectionSort(this.inputNum);
    test.equal(this.inputNum.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
  'insertion': function(test) {
    test.expect(2);
    
    var output = sortie.insertionSort(this.inputNum);
    test.equal(this.inputNum.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
  'merge': function(test) {
    test.expect(2);
    
    var output = sortie.mergeSort(this.inputNum);
    test.equal(this.inputNum.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
};

exports['str sorting'] = {
  setUp: function(done) {
    this.inputStr = ['ae', 'ac', 'aa', 'ab', 'ad'];
    done();
  },
  'bubble': function(test) {
    test.expect(2);
    
    var output = sortie.bubbleSort(this.inputStr);
    test.equal(this.inputStr.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
  'selection': function(test) {
    test.expect(2);
    
    var output = sortie.selectionSort(this.inputStr);
    test.equal(this.inputStr.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
  'insertion': function(test) {
    test.expect(2);
    
    var output = sortie.insertionSort(this.inputStr);
    test.equal(this.inputStr.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
  'merge': function(test) {
    test.expect(2);
    
    var output = sortie.mergeSort(this.inputStr);
    test.equal(this.inputStr.length, output.length);
    test.ok(isSorted(output));
    
    test.done();
  },
};
