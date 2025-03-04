const permute = (nums: number[]): number[][] => {
  let result: number[][] = [];
  let n = nums.length;

  function helper(i: number) {
    if (i === n - 1) {
      result.push([...nums]);
      return;
    }
    for (let j = i; j < n; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      helper(i + 1);
      //backtrack
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  helper(0);
  return result;
};

const permuteUnique = (nums: number[]): number[][] => {
  let result: number[][] = [];
  let n = nums.length;

  function helper(i: number) {
    if (i === n - 1) {
      result.push([...nums]);
      return;
    }
    let hash = {};

    for (let j = i; j < n; j++) {
      if (!hash[nums[j]]) {
        hash[nums[j]] = 1;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        helper(i + 1);
        //backtrack
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  helper(0);
  return result;
};
