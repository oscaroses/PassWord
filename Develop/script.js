// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "[", "]", "{", "}", "/", ";", ":", "<", ">"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var data = [];
var final = ("");

// Main function to generate password
function generatePassword() {

  //Ask user how long the PW should be
  var pwLength = prompt("How many characters would you like for your password? Choose between 8 and 128");

  //Alert if password isn't within the right parameters
  if (pwLength < 8 || pwLength > 128) {
    alert("Must be between 8 and 128!");
    return "no password"
  } else {

    // Ask user what characters password will consist of
    var lowerCase = confirm("Will it contain lower case letters?");
    var upperCase = confirm("Will it contain upper case letters?");
    var confNum = confirm("Will it contain numbers?");
    var specChar = confirm("Will it contain special characters?");

    // Alert if no criteria is chosen
    if (lowerCase === false && upperCase === false && confNum === false && specChar === false) {
      alert("You must choose criteria!");
      return "no password";
    }
    //  Choices concatenated to data variable depending on user choices
    if (lowerCase === true) {
      data = data.concat(alpha);
    }

    if (upperCase === true) {
      data = data.concat(upper);
    }

    if (confNum === true) {
      data = data.concat(numbers);
    }

    if (specChar === true) {
      data = data.concat(character);
    }

    // User data is gathered and password is created
    for (var i = 0; i < pwLength; i++) {
      final += data[Math.floor(Math.random() * (data.length - 1))];
    }
    return final 
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