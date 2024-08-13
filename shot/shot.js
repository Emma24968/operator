let correctScore = false;
const number = 4;
const guess = prompt('Guess a number from 1 to 10');

if (+guess === number ){
    correctScore = true;
}

if(correctScore === true){
    console.log('you are a genus');
}else{
    console.log(`you are wrong. the number is ${number}`);
}