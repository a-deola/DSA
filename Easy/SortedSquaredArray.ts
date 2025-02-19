function sortedSquarredArray(array: number[]): number[] {
  const sortedSquarredArray = new Array(array.length);
  for (var i in array) {
    sortedSquarredArray[i] = array[i] * array[i];
  }
  return sortedSquarredArray.sort((a, b) => a - b);
}

//assuming the array is sorted
function sortedSquarredArrayOptimized(array: number[]): number[] {
  const newArray: number[] = new Array(array.length);
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[leftPointer], 2);
    const rightSquared = Math.pow(array[rightPointer], 2);
    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      leftPointer++;
    } else {
      newArray[i] = rightSquared;
      rightPointer--;
    }
  }
  return newArray;
}
