//create a button
//link button to js via id
var buttonEl = document.querySelector("#generate");
var UpperCase_CHAR_CODES = arrayFromLowtoHigh(65, 90)
var lowerCase_CHAR_CODES = arrayFromLowtoHigh(97, 122)
var Numbers_CHAR_CODES = arrayFromLowtoHigh(48, 57)
var Symbol_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58.64)).concat(arrayFromLowtoHigh(91, 96)).concat(arrayFromLowtoHigh(123, 126))
var includeSymbols = false;
var includeNumbers = false;
var includeUppercase = false;
var includeLowercase = false;

buttonEl.addEventListener("click", criteriaFunction)

function criteriaFunction() {
  includeSymbols = confirm('Include Symbols?');
  if (includeSymbols === true) {
    alert("Ok! Symbols will be included.")
  } else {
    alert("Ok! Symbols will NOT be included.")
  };
  includeNumbers = confirm('Include Numbers?');
  if (includeNumbers === true) {
    alert("Ok! Numbers will be included.")
  } else {
    alert("Ok! Numbers will NOT be included.")
  };
  includeUppercase = confirm('Include Uppercase letters?');
  if (includeUppercase === true) {
    alert("Ok! Uppercase letters will be included.");
  } else {
    alert("Ok! Uppercase letters will NOT be included.");
  };
  includeLowercase = confirm('Include Lowercase letters?');
  if (includeLowercase === true) {
    alert("Ok! Lowercase letters will be included.");
  } else {
    alert("Ok! Lowercase letters will NOT be included.");
  };
  passwordLength = prompt("Please choose a character length between 8 and 128", "");
  inputCharacterLength(passwordLength);
}

function inputCharacterLength(passwordLength) {
  if (passwordLength != null) {
    var generate = confirm("Ok! " + passwordLength + " characters will be used.");
    if (generate === true) {
      writePassword(passwordLength);
    } else {
      alert("Password generation cancelled.")
    }
  } else {
    alert("Invalid Choice!!\n Please choose a number between 8 and 128");
    var passwordLength = prompt("Please choose a character length between 8 and 128", "");
    inputCharacterLength(passwordLength)
  }
}

function writePassword(passwordLength) {
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(passwordLength) {
  let charCodes = lowerCase_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UpperCase_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(Symbol_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(Numbers_CHAR_CODES)
  console.log('CHAR CODES', charCodes)
  var passwordCombo = []
  for (let i = 0; i < passwordLength; i++) {
    var characterCodes = charCodes[Math.floor(Math.random() * 100)]
    console.log('CHARACTERCODES', characterCodes);
    passwordCombo.push(String.fromCharCode(characterCodes))
  }
  return passwordCombo.join('')
}

//using this in stead of writing out a list of character codes
function arrayFromLowtoHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

