function findMaxConsecutiveOnes(nums: number[]): number {
  var currentMax: number = 0;
  var mostOnes: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax++;
    } else {
      if (currentMax > mostOnes) {
        mostOnes = currentMax;
      }
      currentMax = 0;
    }
  }
  if (currentMax > mostOnes) {
    mostOnes = currentMax;
  }
  return mostOnes;
}
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
