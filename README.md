# sortie

Sort algorithms
* bubbleSort
* selectionSort
* insertionSort
* mergeSort

## Examples
Install the module with: `npm install sortie`

```javascript
var sortie = require('sortie');

var numbers = [3, 1, 2];
console.log(sortie.insertion(numbers));
// expect [1, 2, 3]

var words = ['cat', 'dog', 'bird'];
console.log(sortie.bubbleSort(words));
// expect ['bird', 'cat', 'dog']
```
## License
Copyright (c) 2014 Mustafa Rizvi  
Licensed under the MIT license.
