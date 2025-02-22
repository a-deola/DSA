function kthGrammmar(n: number, m: number): number {
  if (n === 0) {
    return 0;
  }
  let length = Math.pow(2, n - 1);
  let mid = length / 2;
  if (m <= mid) {
    return kthGrammmar(n - 1, m);
  } else {
    return 1 - kthGrammmar(n - 1, m - mid);
  }
}

//Josephus Problem
const josephus = (n: number, k: number): number => {
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = (res + k) % i;
  }
  return res + 1;
};
