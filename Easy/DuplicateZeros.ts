function duplicateZeros(arr: number[]): void {
  let zeros = 0;
  const n = arr.length;

  // Count the number of zeros to be duplicated
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeros++;
  }

  // Traverse the array backwards
  for (let i = n - 1; i >= 0; i--) {
    // If position + zeros is within bounds, copy the element
    if (i + zeros < n) {
      arr[i + zeros] = arr[i];
    }

    if (arr[i] === 0) {
      zeros--;
      if (i + zeros < n) {
        arr[i + zeros] = 0;
      }
    }
  }
}
