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

//recursive solution
const subsets = function (nums: number[]): number[][] {
  let result: number[][] = [];
  function helper(nums: number[], i: number, subset: number[]) {
    if (i === nums.length) {
      result.push(subset.slice());
      return;
    }

    helper(nums, i + 1, subset);
    subset.push(nums[i]);
    helper(nums, i + 1, subset);
    subset.pop();
  }
  helper(nums, 0, []);
  return result;
};

//console.log(powerSet([1, 2, 3]));

function subsetsWithDup(nums: number[]): number[][] {
  let result: number[][] = [];
  nums.sort((a, b) => a - b);
  function helper(index: number, subset: number[]) {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[index]);
    helper(index + 1, subset);
    subset.pop();
    while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
      index++;
    }
    helper(index + 1, subset);
  }
  helper(0, []);
  return result;
}
