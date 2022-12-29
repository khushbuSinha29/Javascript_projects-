const dayNum = document.querySelector('.day--num');
const hrsNum = document.querySelector('.hrs--num');
const minNum = document.querySelector('.min--num');
const secNum = document.querySelector('.sec--num');
const msg = document.querySelector('.message');
const timeContainer = document.querySelector('.time-container');



const setTime = () => {
    let year = 2023
    let timeRemaining = 0;
    let futureTime = 0;
    const now = new Date().getTime();
    futureTime = new Date(year, 0, 1).getTime();
    timeRemaining = futureTime - now;
// now 2023 , future = 2024
    // if(now<future)
    if (now === futureTime){
        updateMessage();
    }
    const days = `${Math.floor(timeRemaining / 1000 / 60 / 60 / 24)}`.padStart(2, 0);
    // console.log(days);
    const hrs = `${Math.floor(timeRemaining / 1000 / 60 / 60) % 24}`.padStart(2, 0);
    // console.log(hrs);
    const min = `${Math.floor(timeRemaining / 1000 / 60) % 60}`.padStart(2, 0);
    // console.log(min);
    const sec = `${Math.floor(timeRemaining / 1000) % 60}`.padStart(2, 0);
    // console.log(sec);

    // Updating the values on the screen 
    dayNum.textContent = days;
    hrsNum.textContent = hrs;
    minNum.textContent = min;
    secNum.textContent = sec;
    
}

const displayMessage = () => {
    msg.innerHTML = `HAPPY NEW YEAR ${new Date().getFullYear()}`
}

const myInterval = setInterval(setTime, 1000);

const updateMessage = () => {
    displayMessage();
    timeContainer.classList.add('hidden');
    msg.classList.add('msg-show');

}
setTime();

