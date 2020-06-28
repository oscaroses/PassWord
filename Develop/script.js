// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Ask user how long the PW should be
  var pwLength = prompt("How many characters would you like for your password? Choose between 8 and 128")
  var lowerCase  = confirm("Will it contain lower case letters?")
  var upperCase = confirm("Will it contain upper case letters?")
  var numbers = confirm("Will it contain numbers?")
  var specChar = confirm("Will it contain special characters?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
