function a(nums1, nums2) {
  let d1 = nums1.filter((x) => !nums2.includes(x));
  let d2 = nums2.filter((x) => !nums1.includes(x));
  d1 = new Set(d1);
  d2 = new Set(d2);
  return [[...d1], [...d2]];

  console.log(difference, d2);
}

console.log(a([1, 2, 3], [2, 4, 6])); // [[1,3]. [4,6]]
console.log(a([1, 2, 3, 3], [1, 1, 2, 2])); // [[3], []]
// console.log(a([-68, -80, -19, -94, 82, 21, -43], [-63])); // [[3], []]
