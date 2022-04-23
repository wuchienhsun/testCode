// Given an integer array queries and a positive integer intLength, return an array answer where answer[i] is either the queries[i]th smallest positive palindrome of length intLength or -1 if no such palindrome exists.

// A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros.
function checkPalindrome(str) {
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - i - 1]) return false;
  }
  return true;
}

function kthPalindrome(queries, intLength) {
  let queriesLength = queries.length - 1;
  let start = 10 ** (intLength - 1) + 1;

  let p = [];
  // build a palindromes by intLength and the max len is queries last value

  for (let i = start; p.length <= end; i++) {
    if (checkPalindrome(i.toString())) {
      p.push(i);
    }
  }
  console.log("p", p);
  return queries.map((x) => {
    
  });
}

// console.log("ans", kthPalindrome([1, 2, 3, 4, 5, 90], 3)); // [101,111,121,131,141,999]
// console.log(kthPalindrome([2, 4, 6], 4)); // [1111,1331,1551]
console.log(
  kthPalindrome(
    [2, 201429812, 8, 520498110, 492711727, 339882032, 462074369, 9, 7, 6],
    1
  )
); // [2,-1,8,-1,-1,-1,-1,9,7,6]
