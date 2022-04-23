function a(load, b) {
  let res = 0;
  // find all error load in to hash map
  let hashMap = new Map();
  let count = 0;
  for (let i = 0; i < load.length; i++) {
    if (load[i] === "X") {
      count++;
    } else {
      if (count === 0) {
        continue;
      }
      if (hashMap.has(count)) {
        hashMap.set(count, hashMap.get(count) + 1);
      } else {
        hashMap.set(count, 1);
      }
      count = 0;
    }
  }
  if (count !== 0) {
    if (hashMap.has(count)) {
      hashMap.set(count, hashMap.get(count) + 1);
    } else {
      hashMap.set(count, 1);
    }
  }

  for (let [key, value] of hashMap.entries()) {
    // count b - key and update hashmap value
    // if b < key will go next
    let cost = key + 1;
    while (b > cost && value !== 0) {
      b -= cost;
      res += key;
      value--;
    }
    if (value !== 0 && b > 0) {
      res += b - 1;
      b = 0;
    }
  }

  return res;
}

console.log(a("..XXXXX", 4) === 3); //3
console.log(a("...XXX..X....XXX", 7) === 5); // 5
console.log(a("X.X.XXX...X", 14) === 6); // 6
console.log(a("..", 5) === 0); // 0
console.log(a("..XX", 2) === 1); // 1
console.log(a("..XX..XXX.X.X.X", 6) === 4); // 4
console.log(a("XX.XX", 4) === 2); // 2
console.log(a("XX.X.X", 4) === 2); // 2
