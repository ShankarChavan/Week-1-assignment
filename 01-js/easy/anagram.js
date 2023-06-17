/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// write isAnagram function here
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;
  const str1Map = {};
  const str2Map = {};
  for (let i = 0; i < str1.length; i++) {
    str1Map[str1[i]] = str1Map[str1[i]] + 1 || 1;
    str2Map[str2[i]] = str2Map[str2[i]] + 1 || 1;
  }
  for (let key in str1Map) {
    if (str1Map[key] !== str2Map[key]) return false;
  }
  return true;

}


module.exports = isAnagram;
