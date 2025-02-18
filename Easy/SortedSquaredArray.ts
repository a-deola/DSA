function sortedSquarredArray(array: number[]): number[] {
  const sortedSquarredArray = new Array(array.length);
  for (var i in array) {
    sortedSquarredArray[i] = array[i] * array[i];
  }
  return sortedSquarredArray.sort((a, b) => a - b);
}
