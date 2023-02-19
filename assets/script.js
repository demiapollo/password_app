// Assignment code here
function generatePassword() {
  var length = parseInt(prompt("Enter password length"));
  if (length < 8 || length > 128 || isNaN(length)) {
    return "Enter valid length (min 8 & max 128 characters are allowed)";
  }

  var lowerCase = confirm("Do you want to include lowercase letters?");
  var acceptable = "";
  if (lowerCase) {
    acceptable += "abcdefghijklmnopqrstuvwxyz";
  }

  var UpperCase = confirm("Do you want to include uppercase letters?");

  if (UpperCase) {
    acceptable += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var symbols = confirm("Do you want to include symbols?");

  if (symbols) {
    acceptable += "~!#$%^&*()_+?!";
  }

  var numbers = confirm("Do you want to include numbers?");

  if (numbers) {
    acceptable += "0123456789";
  }

  if (acceptable.length === 0) {
    return "Choose at least one character specification";
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * acceptable.length);
    console.log(acceptable[randomIndex]);
    password += acceptable[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
