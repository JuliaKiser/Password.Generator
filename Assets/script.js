// Retrieve first element in document with id "generate" (index.html line 25)
var generateBtn = document.querySelector("#generate");

// Function to generate password from the criteria
function generatePassword() {

//Here you want to set variables that will become your character bank
  var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var Specials = ["!", "@", "#", "$", "%", "^", "\&", "*", "\(", "\)"];
  var Lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // This variable will create a prompt for your user 
  var pwLength = parseInt(prompt("You must select a password be between 8 and 128 characters in length."));
  // Verify password length within parameters 
    if (pwLength < 8) {
      alert("It must be more than 8 characters")
      return
    }
    if (pwLength >128) {
      alert("It must be less than 128 characters")
    }
//Create variables to prompt user to confirm if they want to select from 1 or multiple character bank variables
  var includeSpecials = confirm("Would you like to have special characters in your password?");
  var includesNumbers = confirm("Would you like to have numbers in your password?")
  var includesLowers = confirm("Would you like to have lowercase letters in your password?");
  var includesUppers = confirm("Would you like to have uppercase letters in your password?");

  // Variable to contain array of selected character arrays
  var Outcomes = [];

  // Push selected arrays to possibles variable
  if (includeSpecials) {
    Outcomes.push(Specials);
  }
  if (includesLowers) {
    Outcomes.push(Lowers);
  }
  if (includesUppers) {
    Outcomes.push(Uppers);
  }
  if (includesNumbers) {
    Outcomes.push(Numbers);
  }

  // Verify user has selected at least one array
  if (!Outcomes.length) {
    alert("You must select at least one character type. Please try again.");
    return
  }

  // This variable will create a random password 
  var result = "";

  // Function generatePassword to pass the password
  console.log(Outcomes);
  console.log(result);
  for (var i = 0; i < pwLength; i++) {
    // This allows us to select a random array
    var randomArray = Outcomes[Math.floor(Math.random() * Outcomes.length)];
    console.log(randomArray);
    // This allows us to select a random charactor from our random array
    var randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
    console.log(randomChar)
    // Logs our result
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