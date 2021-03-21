// Assignment Code


let generateBtn = document.querySelector('#generate')
let result = document.querySelector('#password')


var userChoiceLength = window.prompt("Can we start with how many characters you would like your password to be?");
  while (isNaN(userChoiceLength) || userChoiceLength < 8 || userChoiceLength >128) userChoiceLength = Number(prompt("The length must be between 8 and 128 characters long."));

var upperCaseChoice =confirm("Do you want to use uppercase letters?");
var lowerCaseChoice = confirm("Do you want to use lowercase letters?");
var numberChoice = confirm("Do you want to use numbers?");
var symbolChoice = confirm("Do you want to use symbols?");

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericValue = '1234567890'.split('');
var specialCharacters = '~`!@#$%^&*()_-+={[}]:;'.split('');

while (!upperCaseChoice && !lowerCaseChoice && !numberChoice && !symbolChoice){
  alert("You will need to pick something!")
    upperCaseChoice = confirm("Do you want to use uppercase letters?");
    lowerCaseChoice = confirm("Do you want to use lowercase letters?");
    numberChoice = confirm("Do you want to use numbers?");
    symbolChoice = confirm("Do you want to use symbols?");
}


window.addEventListener('load', function() {
  generatePassword();
});

function generatePassword() {

   var allowed = [];
      // Need a way to find the values for each*
      if (upperCaseChoice === true) {
        allowed.push(...upperCase);
      }
      if (lowerCaseChoice === true) {
        allowed.push(...lowerCase);
      }
      if (numberChoice === true) {
        allowed.push(...numericValue);
      }
      if (symbolChoice === true) {
        allowed.push(...specialCharacters);
      }
      console.log(allowed)
      var password = '';
      for (var i = 0; i < userChoiceLength; i++) {
        var random = Math.floor(Math.random() * allowed.length);
        password += allowed[random];
      }
      console.log(password);
      result.value = password
      return password
    }
  
    generateBtn.addEventListener('click', function() { 
      generatePassword();
    })

  // This is to account for errors with selection
  // function generatorReset() {

    // if (!upperCaseChoice || !lowerCaseChoice || !numberChoice,
    //   !symbolChoice)
    //   ; {
    //   return;
  

    // --------------------------------------------------------------------------------
    // Write password to the #password input
    // function generatePassword() {
    //   var password = ''}

   

  //   var passwordText = document.querySelector("#password");

  //   passwordText.value = password;

  // // Add event listener to generate button (This is for when they push button)
  // generateBtn.addEventListener("click", writePassword);