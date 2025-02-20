const checkMonotonic = function (array: number[]): boolean {
  if (array.length <= 1) {
    return true;
  }
  if (array[0] > array[array.length - 1]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  } else if (array[0] === array[array.length - 1]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) return false;
    }
  } else if (array[0] < array[array.length - 1]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  }
  return true;
};
