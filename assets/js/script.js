//create a button
//link button to js via id
var buttonEl = document.querySelector("#generate");



//create eventlistener on click of button (// "WHEN I click the button to generate a password")
buttonEl.addEventListener ("click", criteriaFunction) 
 


// create a series of prompts for password criteria,   
//display via alert (// THEN I am presented with a series of prompts for password criteria)
//(// "WHEN prompted for password criteria
// THEN I select which criteria to include in the password")(// "WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters") // "WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// "WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected"

function criteriaFunction(userTurn){
   userTurn1 = confirm('Include Symbols?');
    if (userTurn1 === true) { 
      alert ("Ok! Symbols will be included.")
    } else { 
      alert("Ok! Symbols will NOT be included.")
    };
   userTurn2 = confirm('Include Uppercase letters?');
    if (userTurn2 === true) { 
      alert("Ok! Uppercase letters will be included.");
    } else {
      alert("Ok! Uppercase letters will NOT be included.");
    };
   userTurn3 = confirm('Include Lowercase letters?');
    if (userTurn3 === true) {
      alert("Ok! Lowercase letters will be included.");
    } else {
      alert("Ok! Lowercase letters will NOT be included.");
    };
    //will need to use the prompt() Method here
   userTurn4 = prompt("Please choose a character length between 8 and 128", "");
    if (userTurn4 != null){
      document.getSelection()
      alert("Ok! " + inputValue + " will be used.");
    } else {
      userTurn4;
    }
   //figure out a way to impede user from entering anything but numbers for this box.
}

  
 
//What to do with the confirm or cancel? Use as parameters for the password generator. How?
// Write password to the #password box in the body of the HTML (// "WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page")) (// "WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria")
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;

 }







