function isPalindrome(word) {
  //iterate from the beginning to the middle
  //racecar 7/2 == 3.5
  //aaaaaa 6/3 ==3, if i iterate to index 3 it gets to middle of word
  for (let i = 0; i < word.length / 2; i++) {
    //check each letter to the cooresponding letter from the end
    const j = word.length - 1 - i
    const startChar = word[i]
    const endChar = word[j]
    //if any letter doesnt match, return false
    if (startChar !== endChar) return false;
  }
  //or return true
  return true;
}

/*
r a c e c a r
0 1 2 3 4 5 6 
i           j
whenever we go through this loop I want i to move forward one and j
to move backwards by one

  Add your pseudocode here
  make a function that returns true if a word is a palindrome. Meaning if the first letter
  is the same as the last letter and the second letter as same as the second letter
  etc we will reach the middle and return true
  abba = abba = true
  pencil = licnep = false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
