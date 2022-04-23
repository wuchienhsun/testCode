//
//
//
// function a(S) {
//   if (S.indexOf("aaa") !== -1) return -1;
//   let sum = 0;
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] !== "a" && S[i + 1] === "a" && S[i + 2] === "a") {
//       i += 2;
//     } else if (S[i] !== "a" && S[i + 1] === "a") {
//       i++;
//       sum++;
//     } else if (S[i] === "a" && S[i + 1] === "a") {
//       i++;
//     } else if (S[i] === "a") {
//       sum++;
//     } else {
//       sum += 2;
//     }
//   }
//   if (S[0] !== "a") sum += 2;
//   return sum;
// }

// function a(S) {
//   if (S.indexOf("aaa") !== -1) return -1
//   let sum = 0
//   for (let i = 0; i < S.length; i++) {
//     // bb
//     if (S[i] === 'a' && S[i+1] !== 'a') {
//       sum++
//     } else if (S[i] === 'a' && S[i+1] === 'a' && S[i+2] !== 'a') {
//       i++
//     } else if (S[i] !== 'a' && S[i+1] === 'a' && S[i+2] !== 'a') {
//       sum++
//       i++
//     } else if (S[i] !== 'a' && S[i+1] === 'a' && S[i+2] === 'a' && S[i+3] !== 'a') {
//       i += 2
//     } else if (S[i] !== 'a') {
//       sum += 2
//     }
//   }
//   if (S[0] !== 'a') sum += 2
//   return sum
// }

function a(S) {
  if (S.indexOf("aaa") !== -1) return -1;
  let sum = 0;
  let s = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== "a") {
      s += ".";
    } else s += "a";
  }

  s = s.split(".");
  for (let val of s) {
    if (val.length === 1) {
      sum += 1;
    }
    if (val.length === 0) {
      sum += 2;
    }
  }
  return sum;
}

console.log(a("aabab") === 3); // 1
console.log(a("aabaab") === 2); // 1
console.log(a("aab") === 2); // 1
console.log(a("baaba") === 3); // 1
console.log(a("dog") === 8); // 1
console.log(a("pag") === 5); // 1
console.log(a("aa") === 0); // 1
console.log(a("baaa") === -1); // 1
// console.log(a()); // 1
