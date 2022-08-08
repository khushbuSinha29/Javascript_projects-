let count = 0;

// const val = document.getElementById('value');
// // console.log(val);
// const reset = document.querySelector('.reset');
// reset.addEventListener('click', function(){
//     count=0
//     val.textContent = count;
// });

// const increase = document.querySelector('.increase');
// increase.addEventListener('click', function(){
//     val.textContent = ++count;
// });
// const decrease = document.querySelector('.decrease')
// decrease.addEventListener('click', function(){
//     val.textContent =--count;
// });


// other method

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList;
        // console.log(styles);
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
        }
        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count===0){
            value.style.color="black";
        }
        value.textContent = count;
    })
})