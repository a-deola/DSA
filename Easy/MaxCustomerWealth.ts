function maximumWealth(accounts: number[][]): number {
  let sums: number[] = [];
  for (let i = 0; i < accounts.length; i++) {
    let num = 0;
    const subArray = accounts[i];
    for (let i = 0; i < subArray.length; i++) {
      num += subArray[i];
    }
    sums.push(num);
  }
  return Math.max(...sums);
}

function maximumWealth2(accounts: number[][]): number {
  let max = 0;
  accounts.forEach(function (customer: number[], i) {
    let balance = 0;
    customer.forEach(function (value: number, i) {
      balance += value;
    });
    max = Math.max(max, balance);
  });
  return max;
}
