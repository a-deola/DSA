// iterative solution
function numberOfSteps(num: number): number {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    count++;
  }
  return count;
}
//recursive solution
function numberOfStepsRecursive(num: number, count = 0): number {
  if (num === 0) return count;

  const nextNum = num % 2 === 0 ? num / 2 : num--;

  return numberOfStepsRecursive(nextNum, count++);
}

console.log(numberOfStepsRecursive(14));
