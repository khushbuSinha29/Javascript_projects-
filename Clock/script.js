const time = document.querySelector('.current-time');
const timehrs = document.querySelector('.box-hrs');
const timemin = document.querySelector('.box-min');
const timesec = document.querySelector('.box-sec');
const timemeridian = document.querySelector('.box-meridian')
const setCurrentTime = function(){
    const date = new Date();
    let hrs = `${date.getHours()}`.padStart(2,0);
    let min = `${date.getMinutes()}`.padStart(2,0); //For doing padStart it is inserting 0 in case of 1-9 , it should be string to add padStart    let sec = `${date.getSeconds()}`.padStart(2,0);
    let sec = `${date.getSeconds()}`.padStart(2,0);
    let meridian = 'AM';
    // console.log(`${hrs}:${min}:${sec}`);
    if(hrs>=12){
        meridian = 'PM';
    }
    if(hrs>12){
        hrs = `${(hrs -12)}`.padStart(2,0);
        // `${hrs}`.padStart(2,0);
    }
    // const clockTime = `${hrs} : ${min} : ${sec} ${meridian}`
    // console.log(clockTime);
    // time.textContent = clockTime;
    
    timehrs.textContent = hrs;
    timemin.textContent = min;
    timesec.textContent = sec;
    timemeridian.textContent = meridian;
}

// Update the time of the clock
// const updateTime =  function(){
//     setCurrentTime();
// }

setInterval(setCurrentTime, 1000);

function init(){
 setCurrentTime();
}
init();