//iterative solution
const powerSet = (arr: number[]): number[][] => {
  let result: number[][] = [[]];
  for (let i = 0; i < arr.length; i++) {
    let n = result.length;
    for (let j = 0; j < n; j++) {
      result.push([...result[j], arr[i]]);
    }
  }
  return result;
};

console.log(powerSet([1, 2, 3]));
