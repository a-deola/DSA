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
