function a(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1);
        i--;
        res++;
      }
    }
  }
  if (nums.length % 2 === 0) {
    return res;
  } else {
    return res + 1;
  }
}

console.log(a([1, 1, 2, 3, 5])); // 1
console.log(a([1, 1, 2, 2, 3, 3])); // 2
