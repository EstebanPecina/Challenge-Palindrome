// Write your code below
// program to check if the string is palindrome or not

let word = "Racecar";

function isPalindrome(str) {
  let palindrome = true;
  for(i = 0; i < str.length; i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

console.log(isPalindrome(word))


