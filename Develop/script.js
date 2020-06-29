// Assignment Code
var generateBtn = document.querySelector("#generate");

character: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "[", "]", "{", "}", "/", ";", ":", "<", ">"]
alpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function generatePassword() {
  //Ask user how long the PW should be
  var pwLength = prompt("How many characters would you like for your password? Choose between 8 and 128")
  if (pwLength < 8 || pwLength > 128) {
    alert("Must be between 8 and 128!")
  } else {

  var lowerCase = confirm("Will it contain lower case letters?")
  var upperCase = confirm("Will it contain upper case letters?")
  var confNum = confirm("Will it contain numbers?")
  var specChar = confirm("Will it contain special characters?")

  if (lowerCase === false && upperCase === false && confNum === false && specChar === false) {
    alert("You must choose criteria!")
  }
  }

  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);