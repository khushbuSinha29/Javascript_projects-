'use strict';
let highScore=0;
let secretNumber = Math.floor(Math.random()*20)+1;
console.log(secretNumber);

let score = document.querySelector('.score').textContent;

const againBtn = document.querySelector('.again');

const displayMessage = function(msg){
    document.querySelector('.message').textContent=msg;
};

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
    let number = Number(document.querySelector('.guess').value);
    // console.log(number, typeof number);
    if(!number){
        document.querySelector('.message').textContent='No number'
    }
    else if (secretNumber === number) {
         displayMessage('Correct Number');
        // document.querySelector('.highscore').innerHTML = score;
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore
        }
    } else if (number!==secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = number>secretNumber?"Too High":'Too Low';
            displayMessage(number > secretNumber ? "Too High" : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = "You lost the game";
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }

    } 
    // else if(number<secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent = "Too Low";
    //         score--;
    //         document.querySelector('.score').textContent = score; 
    //     }else{
    //         document.querySelector('.message').textContent = "You lost the game";
    //         document.querySelector('.score').textContent = 0;
    //     }
              
    // }else if(number>secretNumber){
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Too High";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "You lost the game";
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
});

againBtn.addEventListener('click', function(){
    // console.log('play again');
    score=20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    // console.log(secretNumber);
    displayMessage("Start guessing...");
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value="";
    document.querySelector('.number').textContent='?';
});
