function a(N) {
  const arr = [];
  const n = 20;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(Math.pow(2, i) * Math.pow(3, j));
    }
  }
  arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return arr[N];
}

console.log(a(4) === 6); // 1
console.log(a(15)); // 1