//create a button
//link button to js via id
var buttonEl = document.querySelector("#generate");
var passwordChoices = ['character length', 'character types' ]


//create eventlistener on click of button
buttonEl.addEventListener("click", ) 
  Symbols;
}
function Symbols() {
  var txt;
  if (confirm, "Include Symbols?"){
    txt = "Ok! Symbols included.";
  }
  else{
    txt = "OK! Symbols NOT included.";
  }
};

// {

//   // userTurn = confirm('Include Symbols?');
//   //   if (confirm, "Goood") {
//   //   userTurn = confirm('true?'); 
//   //   if (true) {
//   //     userTurn = confirm('Include Uppercase?');
//   //   }
//   // }
//   // else, if (false){
//   //   userTurn = confirm('false');
//   //   if (true) {
//   //     userTurn = confirm('Include Uppercase?');
//   //   }  
//   // }
  
// });

// function Symbols() {
//   var txt;
//   if (confirm ( "Include Symbols?"){
//     txt = "Ok! Symbols included.";
//   }
//   else{
//     txt = "OK! Symbols NOT included.";
//   }
// };





// create a series of prompts for password criteria,
//display via alert
//triggger on click which means call this function in the click event listenr


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}




// "WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria"
// "WHEN prompted for password criteria
// THEN I select which criteria to include in the password"
// "WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters"
// "WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters"
// "WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected"
// "WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria"
// "WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page"