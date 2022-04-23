function a(current, correct) {
  let sum = 0;
  current = current.split(":");
  correct = correct.split(":");

  if (correct[1] > current[1]) {
    sum += correct[0] - current[0];
    remain = correct[1] - current[1];

    while (remain !== 0) {
      if (remain >= 15) {
        remain -= 15;
        sum++;
      } else if (remain >= 5) {
        remain -= 5;
        sum++;
      } else if (remain >= 1) {
        remain -= 1;
        sum++;
      }
    }
  } else {
    sum += correct[0] - current[0] - 1;
    remain = 60 - parseInt(current[1]) + parseInt(correct[1]);

    while (remain !== 0) {
      if (remain >= 15) {
        remain -= 15;
        sum++;
      } else if (remain >= 5) {
        remain -= 5;
        sum++;
      } else if (remain >= 1) {
        remain -= 1;
        sum++;
      }
    }
  }
  console.log("suim", sum);
  return sum;
}

// current by 1, 5, 15, or 60 minutes
console.log(a("02:30", "04:35") === 3); // 3
console.log(a("11:00", "11:01") === 1); // 1
console.log(a("11:00", "12:01") === 2); // 1
console.log(a("00:00", "23:59") === 32); // 1
console.log(a("09:41", "10:34") === 7); // 1
