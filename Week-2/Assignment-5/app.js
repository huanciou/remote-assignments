function binarySearchPosition(numbers, target, l = 0, r = numbers.length - 1) {
  /* O(log n) */

  if (l > r) {
    return -1;
  }

  let m = Math.floor((l + r) / 2);

  if (target == numbers[m]) {
    return m;
  } else if (target < numbers[m]) {
    return binarySearchPosition(numbers, target, l, m - 1);
  } else if (target > numbers[m]) {
    return binarySearchPosition(numbers, target, m + 1, r);
  }
}

// main

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
