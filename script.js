// Retrieve first element in document with id "generate" (index.html line 25)
var generateBtn = document.querySelector("#generate");

// Function to generate password from user selection criteria
function generatePassword() {

//Set up variables to access your character bank
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specials = ["!", "@", "#", "$", "%", "^", "\&", "*", "\(", "\)"];
  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // Prompt your user 
  var pwLength = parseInt(prompt("What length does the password need to be? It must be between 8 and 128 characters in length."));
    // Verify password length within parameters
    if (pwLength < 8 || pwLength > 128) {
      // 
      alert("It must be between 8 and 128 characters in length")
      return
    }
  var wantsSpecials = confirm("Would you like to have special characters in your password?");
  var wantsNumbers = confirm("Would you like to have numbers in your password?")
  var wantsLowers = confirm("Would you like to have lowercase letters in your password?");
  var wantsUppers = confirm("Would you like to have uppercase letters in your password?");

  // Variable to contain array of selected character arrays
  var possibles = [];

  // Push selected arrays to possibles variable
  if (wantsSpecials) {
    possibles.push(specials);
  }
  if (wantsLowers) {
    possibles.push(lowers);
  }
  if (wantsUppers) {
    possibles.push(uppers);
  }
  if (wantsNumbers) {
    possibles.push(numbers);
  }

  // Verify user has selected at least one array
  if (!possibles.length) {
    alert("You must select at least one character type. Please try again.");
    return
  }

  // Variable for random password
  var result = "";

  // Function generatePassword to pass the password
  console.log(possibles);
  console.log(result);
  for (var i = 0; i < pwLength; i++) {
    // Select random array from possible array
    var randomArray = possibles[Math.floor(Math.random() * possibles.length)];
    console.log(randomArray);
    // Select random character from the randomly selected array
    var randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
    console.log(randomChar)
    // Write (concatenate) the character to the end of the result variable
    result += randomChar;
    console.log(result);
  }
  return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);