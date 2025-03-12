function findNumbers(nums: number[]): number {
  let count = 0;
  let evenDigits = 0;
  nums.forEach((num) => {
    while (num > 0) {
      num = Math.floor(num / 10);
      count++;
    }
    if (count % 2 === 0) {
      evenDigits++;
    }
    count = 0;
  });

  return evenDigits;
}
