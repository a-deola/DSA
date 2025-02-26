const toh = (N: number, from: number, to: number, aux: number): number => {
  let count = 0;
  function helper(N: number, from: number, to: number, aux: number): void {
    // base case
    if (N === 1) {
      count++;
      console.log(`Move disk ${N} from rod to ${from} to rod ${to}`);
      return;
    }
    // recursive case
    helper(N - 1, from, aux, to);
    count++;
    console.log(`Move disk ${N} from rod to ${from} to rod ${to}`);
    helper(N - 1, aux, to, from);
  }
  helper(N, from, to, aux);
  return count;
};
