const factorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

const printRound = (n: number): number[] => {
  if (n <= 0) {
    return [];
  }
  const arr: number[] = printRound(n - 1);

  return [n, ...arr, n];
};

console.log(printRound(5));
