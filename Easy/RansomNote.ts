function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote.charAt(i);

    let matchingIndex = magazine.indexOf(letter);

    if (matchingIndex === -1) {
      return false;
    }
    magazine =
      magazine.substring(0, matchingIndex) +
      magazine.substring(matchingIndex + 1);
  }
  return true;
}
// TC: O(n*m), SC: O(n)

function canConstructOptimized(ransomNote: string, magazine: string): boolean {
  const magazineMap = new Map<string, number>();
  for (let i = 0; i < magazine.length; i++) {
    let letter = magazine.charAt(i);
    let currentCount = magazineMap.get(letter) || 0;

    magazineMap.set(letter, currentCount + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote.charAt(i);
    let currentCount = magazineMap.get(letter) || 0;

    if (currentCount === 0) {
      return false;
    }

    magazineMap.set(letter, currentCount - 1);
  }
  return true;
}

// TC: O(m), SC: O(1)
