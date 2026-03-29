const passwordBox = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const copiedText = document.getElementById("copied-text"); 
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        const allCharacters = upperCase + lowerCase + numbers + symbols;
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordBox.value = password;
}

generateButton.addEventListener("click", generatePassword);

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    copiedText.style.backgroundColor = " #019f55"; // Change background color to indicate success
    copiedText.style.display = "block";
    setTimeout(() => {
        copiedText.style.display = "none";
    }, 2000);
}

copyButton.addEventListener("click", copyPassword);

