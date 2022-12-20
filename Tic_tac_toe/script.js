 console.log('Welcome to tic tac toe');

let turn = 'X';
let count =1;
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

// check for the winner
const checkWin = () => {
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]

    const boxtext = document.getElementsByClassName('boxtext');
    // console.log(boxtext);
    // console.log(boxtext[1].innerHTML);
    wins.forEach(ele => {
        // console.log(boxtext[ele[1]]);
        if ((boxtext[ele[0]].innerHTML === boxtext[ele[1]].innerHTML) && (boxtext[ele[1]].innerHTML === boxtext[ele[2]].innerHTML) && boxtext[ele[0]].innerHTML !== ''){
            document.querySelector('.info').innerText = `${boxtext[ele[0]].innerHTML} Won`;
            isGameOver = true; 
            document.querySelector('.line').classList.remove('line-hide');
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${ele[3]}vw, ${ele[4]}vw) rotate(${ele[5]}deg)`;
        }
    })
};

const boxes = document.querySelectorAll('.box');
// console.log(boxes.values());
boxes.forEach((box)=>{
    // console.log(box)
    let boxText = box.querySelector('.boxtext');
    // console.log(boxText);
    box.addEventListener('click', ()=>{
       if(boxText.innerText === ''){
        boxText.innerText = turn;
        turn = changeTurn();
        checkWin();
        if(!isGameOver){
            document.querySelector('.info').innerText = `Turn for ${turn}`;
        }
        // else{
        //     boxText.innerHTML = '';
        // }
       }
    })
})

// Reset button 
const resetBtn = document.querySelector('.btn');
resetBtn.addEventListener('click', ()=>{
    // console.log('reset btn clicked');
    const boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach((box)=>{
        box.textContent = '';
    })
    turn = 'X';
    isGameOver = false;
    document.querySelector('.info').innerText = `Turn for ${turn}`;
    document.querySelector('.line').classList.add('line-hide');
});
