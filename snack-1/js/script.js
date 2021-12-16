const userWord = prompt("Inserisci una parola");

function wordReverse(invertita){
    const reverse = invertita.split('').reverse().join(''); 
    return reverse;
}

let userWordReverse = wordReverse(userWord);

if(userWord === userWordReverse){
    console.log('Questa parola è palindroma');
  } else {
    console.log('Questa parola non è palindroma');
  }