let userChoose = prompt('Pari o Dispari?');
let userNumber = parseInt(prompt('Inserire un numero compreso tra 1 e 5'));

const choose = document.getElementById('choose');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const result = document.getElementById('result');

function randomComputerNumber(min,max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}

let computerNumber = randomComputerNumber(1,5);
let sum = userNumber + computerNumber;
let even = 0;
let odd = 1;

choose.innerHTML = "Hai scelto" + ' ' + userChoose;
player.innerHTML = "Il numero da te inserito è" + ' ' + userNumber;
computer.innerHTML = "Il numero estratto dal computer è" + ' ' + computerNumber;
userChoose = userChoose.toLowerCase();
  
if (userChoose === 'pari') {
    if (sum % 2 === even) {
        result.innerHTML = "La somma totale di questi numeri è" + ' ' + sum + ", di conseguenza hai scelto" + ' ' + userChoose + ", perciò hai vinto" 
    } else{
        result.innerHTML = "La somma totale di questi numeri è" + ' ' + sum + ", di conseguenza hai scelto" + ' ' + userChoose + ", perciò hai perso" 
    }
} 

if (userChoose === 'dispari') {
    if (sum % 2 === odd) {
        result.innerHTML = "La somma totale di questi numeri è" + ' ' + sum + ", di conseguenza hai scelto" + ' ' + userChoose + ", perciò hai vinto" 
    } else{
        result.innerHTML = "La somma totale di questi numeri è" + ' ' + sum + ", di conseguenza hai scelto" + ' ' + userChoose + ", perciò hai perso" 
    }
}