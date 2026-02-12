/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    for(let i = 0; i < textInput.length; i++){
        if(textInput[i] != textInput[textInput.length - i - 1]) return false;
    }
    return true;
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console
console.log(checkPalindrome(testString));
console.log(checkPalindrome(testString2));