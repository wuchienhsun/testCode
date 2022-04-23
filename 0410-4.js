function a(A) {
  let res = 0;
  const n = A.length;

  for (let q = 0; q < n; q++) {
    for (let p = 0; p <= q; p++) {
      if (res > 1000000000) {
        return -1;
      }
      if (helper(A.slice(p, q + 1))) {
        res++;
      }
    }
  }
  return res;
}

function helper(arr) {
  if (arr.length === 0) return false;
  if (arr.reduce((a, b) => a + b) === 0) return true;
  return false;
}

console.log(a([2, -2, 3, 0, 4, -7]) === 4); // 1