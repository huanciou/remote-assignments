function count(input1) {
  const hashTable = {};

  for (let i = 0; i < input1.length; i++) {
    let key = input1[i];

    if (hashTable[key]) {
      hashTable[key]++;
    } else {
      hashTable[key] = 1;
    }
  }

  return hashTable;
}

function groupByKey(input2) {
  const hashTable = {};

  for (let i = 0; i < input2.length; i++) {
    let key = input2[i].key;

    if (hashTable[key]) {
      hashTable[key] += input2[i].value;
    } else {
      hashTable[key] = input2[i].value;
    }
  }
  return hashTable;
}

// main

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // // should print {a:3, b:1, c:2, x:1}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
