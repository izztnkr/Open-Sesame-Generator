//create a button
//link button to js via id
var buttonEl = document.querySelector("#generate");
var UpperCase_CHAR_CODES = arrayFromLowtoHigh(65,90)
var lowerCase_CHAR_CODES = arrayFromLowtoHigh(97,122)
var Numbers_CHAR_CODES = arrayFromLowtoHigh(48,57)
var Symbol_CHAR_CODES = arrayFromLowtoHigh(33,47).concat(arrayFromLowtoHigh(58.64)).concat(arrayFromLowtoHigh(91,96)).concat(arrayFromLowtoHigh(123, 126))



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
   var includeSymbols = confirm('Include Symbols?');
    if (includeSymbols === true) { 
      alert ("Ok! Symbols will be included.")
    } else { 
      alert("Ok! Symbols will NOT be included.")
    };
    var includeNumbers = confirm('Include Numbers?');
    if (includeNumbers === true) { 
      alert ("Ok! Numbers will be included.")
    } else { 
      alert("Ok! Numbers will NOT be included.")
    };
    var includeUppercase = confirm('Include Uppercase letters?');
    if (includeUppercase === true) { 
      alert("Ok! Uppercase letters will be included.");
    } else {
      alert("Ok! Uppercase letters will NOT be included.");
    };
   var includeLowercase = confirm('Include Lowercase letters?');
    if (includeLowercase === true) {
      alert("Ok! Lowercase letters will be included.");
    } else {
      alert("Ok! Lowercase letters will NOT be included.");
    };
    
    //will need to use the prompt() Method here
   var passwordLength = prompt("Please choose a character length between 8 and 128", "");
   stringyThingy(passwordLength);

   function stringyThingy(passwordLength){
    if (passwordLength != null){
      document.getSelection()
      alert("Ok! " + passwordLength + " characters will be used.");
    } else {
      alert("Invalid Choice!!\n Please choose a number between 8 and 128");
      var passwordLength = prompt("Please choose a character length between 8 and 128", "");
      stringyThingy(passwordLength)
    }
    generatePassword
  }
  
  // function generatePassword(includeSymbols, includeNumbers, includeUppercase, includeLowercase, passwordLength);
  function generatePassword(includeSymbols, includeNumbers, includeUppercase, includeLowercase, passwordLength){
    let charCodes = lowerCase_CHAR_CODES
    if (includeUppercase) charCodes =charCodes.concat(UpperCase_CHAR_CODES)
    if (includeSymbols) charCodes= charCodes.concat(Symbol_CHAR_CODES)
    if (includeNumbers) charCodes= charCodes.concat(Numbers_CHAR_CODES)

    var password = []
    for (let i = 0; i <passwordLength; i++){
      var characterCodes = charCodes[Math.floor(Math.random()*passwordLength 
        )]
    }


    
  } 
 
   //figure out a way to impede user from entering anything but numbers for this box.
}

//using this in stead of writing out a list of character codes
function arrayFromLowtoHigh(low,high) {
  var array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
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







