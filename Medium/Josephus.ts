var findTheWinner = function (n: number, k: number): number {
  let arr: number[] = Array.from({ length: n }, (_, i) => i + 1);

  function helper(n: number[], startIndex: number) {
    if (n.length === 1) {
      return n[0];
    }
    let loserIndex = (startIndex + k - 1) % arr.length;
    arr.splice(loserIndex, 1);
    return helper(arr, loserIndex);
  }
  return helper(arr, 0);
};

const josephusWinner = (n: number, k: number): number => {
  function helper(n: number): number {
    if (n === 1) {
      return 0;
    }
    return (helper(n - 1) + k) % n;
  }
  return helper(n) + 1;
};
//Josephus Problem Optimized
const josephus = (n: number, k: number): number => {
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = (res + k) % i;
  }
  return res + 1;
};
