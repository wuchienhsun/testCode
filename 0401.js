function a(N, R, C) {
  let arr = new Array(R.length);
  for (let i = 0; i < R.length; i++) {
    arr.push(R[i] + "-" + C[i]);
  }
  let map = [];
  // build locations
  for (let i = 0; i < R.length - 1; i++) {
    map.push(new Array(N).fill(0));
    // find current i if exist boom
  }
  arr.forEach((el) => {
    let target = el.split("-");
    target = target.map((x) => Number.parseInt(x));
    map[target[0]][target[1]] = "B";
    // count B num
    if (target[0] - 1 >= 0 && map[target[0] - 1][target[1]] !== "B") {
      map[target[0] - 1][target[1]] += 1;
    }
    if (
      target[0] > 1 &&
      target[1] > 1 &&
      map[target[0] - 1][target[1] - 1] !== "B"
    ) {
      map[target[0] - 1][target[1] - 1] += 1;
    }
    if (
      target[0] - 1 >= 0 &&
      target[1] + 1 < N &&
      map[target[0] - 1][target[1] + 1] !== "B"
    ) {
      map[target[0] - 1][target[1] + 1] += 1;
    }
    if (target[1] + 1 < N && map[target[0]][target[1] + 1] !== "B") {
      map[target[0]][target[1] + 1] += 1;
    }
    if (target[1] - 1 >= 0 && map[target[0]][target[1] - 1] !== "B") {
      map[target[0]][target[1] - 1] += 1;
    }
    if (
      target[0] + 1 < N &&
      target[1] - 1 >= 0 &&
      map[target[0] + 1][target[1] - 1] !== "B"
    ) {
      map[target[0] + 1][target[1] - 1] += 1;
    }
    if (target[0] + 1 < N) {
      if (map[target[0] + 1][target[1]] !== "B") {
        map[target[0] + 1][target[1]] += 1;
      }
    }
    if (target[0] + 1 < N && target[1] + 1 < N) {
      if (map[target[0] + 1][target[1] + 1] !== "B") {
        map[target[0] + 1][target[1] + 1] += 1;
      }
    }
  });

  console.log("ans", map);
}

console.log(a(3, [2, 1, 0, 2], [0, 2, 1, 2])); // 1
// console.log(a()); // 1
