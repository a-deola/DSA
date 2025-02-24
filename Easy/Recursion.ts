const factorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

//console.log(factorial(5));

const printRound = (n: number): number[] => {
  if (n <= 0) {
    return [];
  }
  const arr: number[] = printRound(n - 1);

  return [n, ...arr, n];
};

//console.log(printRound(5));

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//console.log(fibonacci(20));

const sumToN = (curr: number, n: number): number => {
  if (curr === n) {
    return n;
  }
  return curr + sumToN(curr + 1, n);
};
console.log(sumToN(0, 10));

const sumFromN = (n: number): number => {
  if (n === 0) {
    return 0;
  }
  return n + sumFromN(n - 1);
};
