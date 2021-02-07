// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create your variable

var charUpper = ['A','B','C','D'];
var charLower = ['a','b'];
var charSpecial = ['#', '$'];
var charNumbers = ['1'];

//Create function from criteria list
function generateSelections(){
  var pwLength = parseInt(prompt("Select Length of Password: Must be between 8 and 128 characters"));
  if (pwLength < 8 || pwLength > 128) {
    alert("It must be between 8 and 128 characters in length")
    return
  }
}
//Create options choices 

var withcharUpper = confirm("Do you want uppercase letters?");
var withcharLower = confirm("Do you want lowercase letters?");
var withcharSpecial = confirm("Do you want to add special characters?");
var withcharNumbers = confirm("Do you want to include numbers in your password?");

//Password Options - this will contain your array of selected arrays 

var Options = [];

if (withcharUpper) {
  Options.push(charUpper);
}
if (withcharLower) {
  Options.push(charLower);
}
if (withcharSpecial) {
  Options.push(charSpecial);
}
if (withcharNumbers) {
  Options.push(charNumbers);
}
if (!Options.pwLength) {
  alert ("You must select at least one character type. Repeat steps.")
}



function generatePassword () {

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
