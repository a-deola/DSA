function powerSum(arr: number[], power = 1): number {
  let sum = 0;
  arr.forEach((num) => {
    if (Array.isArray(num)) {
      sum += powerSum(num, power + 1);
    } else {
      sum += num;
    }
  });

  return Math.pow(sum, power);
}
