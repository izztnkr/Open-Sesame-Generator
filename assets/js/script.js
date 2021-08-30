//create a button
//link button to js via id
var buttonEl = document.querySelector("#generate");
var UpperCase_CHAR_CODES = arrayFromLowtoHigh(65,90)
var lowerCase_CHAR_CODES = arrayFromLowtoHigh(97,122)
var Numbers_CHAR_CODES = arrayFromLowtoHigh(48,57)
var Symbol_CHAR_CODES = arrayFromLowtoHigh(33,47).concat(arrayFromLowtoHigh(58.64)).concat(arrayFromLowtoHigh(91,96)).concat(arrayFromLowtoHigh(123, 126))


buttonEl.addEventListener ("click", criteriaFunction) 


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
    
  
   var passwordLength = prompt("Please choose a character length between 8 and 128", "");
   inputCharacterLength(passwordLength);

   function inputCharacterLength(passwordLength){
    if (passwordLength != null){
      var generate = confirm("Ok! " + passwordLength + " characters will be used.");
        if (generate === true){
          writePassword(generatePassword);
        
        }else{
          alert("Password generation cancelled.")
        }
    } else {
      alert("Invalid Choice!!\n Please choose a number between 8 and 128");
      var passwordLength = prompt("Please choose a character length between 8 and 128", "");
      inputCharacterLength(passwordLength)
    }
    
  }
  
  function generatePassword(includeSymbols, includeNumbers, includeUppercase, includeLowercase){
    let charCodes = lowerCase_CHAR_CODES
    if (includeUppercase) charCodes =charCodes.concat(UpperCase_CHAR_CODES)
    if (includeSymbols) charCodes= charCodes.concat(Symbol_CHAR_CODES)
    if (includeNumbers) charCodes= charCodes.concat(Numbers_CHAR_CODES)

     var passwordCombo = []
     for (let i = 0; i <passwordLength; i++){
      var characterCodes = charCodes[Math.floor(Math.random()*passwordLength)]
        passwordCombo.push(String.fromCharCode(charCodes))
    }
     return passwordCombo.join('')
  }


  function writePassword(includeSymbols, includeNumbers, includeUppercase, includeLowercase) {
    var password = generatePassword(includeSymbols, includeNumbers, includeUppercase, includeLowercase);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } 
 
   
}

//using this in stead of writing out a list of character codes
function arrayFromLowtoHigh(low,high) {
  var array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}
 
