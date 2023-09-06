function mergeSort(numbers, l = 0, r = numbers.length - 1) {
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    mergeSort(numbers, l, m);
    mergeSort(numbers, m + 1, r);
    merge(numbers, l, m, r);
  }
}

function merge(numbers, l, m, r) {
  const Max = Infinity;
  const leftSub = numbers.slice(l, m + 1); // slice(a,b) => [a,b)
  const rightSub = numbers.slice(m + 1, r + 1);

  leftSub.push(Max);
  rightSub.push(Max);

  let leftIndex = 0;
  let rightIndex = 0;

  for (let i = l; i <= r; i++) {
    if (leftSub[leftIndex] < rightSub[rightIndex]) {
      numbers[i] = leftSub[leftIndex];
      leftIndex++;
    } else {
      numbers[i] = rightSub[rightIndex];
      rightIndex++;
    }
  }
}

// find the max number

function max(numbers) {
  /* O(nlogn) */
  mergeSort(numbers); // sort first

  return numbers[numbers.length - 1]; // the rightest one will be the largest one
}

function findPosition(numbers, target) {
  const hashTable = [];
  hashTable[target] = true;

  for (let i = 0; i < numbers.length; i++) {
    let key = numbers[i];
    if (hashTable[key]) {
      return i;
    }
  }
  return -1;
}

// main

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
