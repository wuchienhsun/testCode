function a(A) {
  let ans = 0;
  let check = false;
  for (let i = 0; i < A.length - 1; i++) {
    if (
      (A[i] % 2 === 0 && A[i + 1] % 2 === 0) ||
      (A[i] % 2 !== 0 && A[i + 1] % 2 !== 0)
    ) {
      if (i === 0 || i === A.length - 2) {
        check = true;
      }
      i++;
      ans++;
    }
  }

  if (!check) {
    if (
      (A[0] % 2 === 0 && A[A.length - 1] % 2 === 0) ||
      (A[0] % 2 !== 0 && A[A.length - 1] % 2 !== 0)
    ) {
      ans++;
    }
  }
  return ans;
}

console.log(a([4, 2, 5, 8, 7, 3, 7]) === 2); // 2
console.log(a([14, 21, 16, 35, 22]) === 1); // 1
console.log(a([5, 5, 5, 5, 5, 5]) === 3); // 3
console.log(a([7, 5, 5, 5, 5, 5, 5]) === 3); // 3
console.log(a([7, 5, 5, 5, 7, 5, 5, 5]) === 4); // 4
