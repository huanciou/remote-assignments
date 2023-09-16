function twoSum(nums, target) {
  const hashTable = [];

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    let val = nums[i];
    let complement = target - val;

    if (hashTable[complement] !== undefined) {
      // O(1)
      // 找前面有沒有 complement 這個 value
      return [hashTable[complement], i];
    }

    hashTable[val] = i;
    // 如果 不符合 return condition
    // nums 的 值 存成 hashTable 的 "key",
    // nums 的 index 存成 hashTable 的 "value"
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Should returns: [0, 1]
