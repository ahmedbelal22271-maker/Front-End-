let word_length_element = document.getElementById("length-p");
const slider = document.querySelector('input[type="range"]');

slider.addEventListener("input",function(){
    word_length_element.textContent = this.value;
})

let password_options = "";
let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LOWER = "abcdefghijklmnopqrstuvwxyz";
let NUMBERS = "0123456789";
let SYMBOLS = "!@#$%^&*()";

let upper = document.getElementById("upper");
let lower = document.getElementById('lower');
let numbers = document.getElementById("numbers");
let symbols = document.getElementById('symbols');

let final_password_element = document.getElementById("password-p")
let copy_button = document.getElementById("copy-button")
const generation_button = document.getElementById("gen-button")

generation_button.addEventListener('click', function(){
    let password = "";

    if (upper.checked) password_options += UPPER;
    if (lower.checked) password_options += LOWER;
    if (numbers.checked) password_options += NUMBERS;
    if (symbols.checked) password_options += SYMBOLS;
    for (let i = 0; i < Number(word_length_element.textContent); i++) {
        const randomIndex = Math.floor(Math.random() * password_options.length);
        password += password_options[randomIndex];
    }
    final_password_element.textContent = password

})


copy_button.addEventListener('click', function(){
    let text = final_password_element.textContent;

    navigator.clipboard.writeText(text)
        .then(() => {alert('Password copied')})

})