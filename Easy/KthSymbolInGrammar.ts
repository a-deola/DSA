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
