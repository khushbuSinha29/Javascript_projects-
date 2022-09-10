// console.log('Hello ! ')

const questionBlock = document.querySelectorAll('.item');
console.log(questionBlock);

questionBlock.forEach(function(question){
    const icon = question.querySelector('.icons');
    // console.log(icon);
    icon.addEventListener('click', function(){
        // console.log('button clicked')
        // console.log(question.classList)
        // console.log(ele)
        // console.log(question);
        questionBlock.forEach(function(ele){
            // console.log(ele)
            if(ele!=question){
                ele.classList.remove('open');
            }
        });
        question.classList.toggle('open');
    });
});






// const itemEl = document.querySelectorAll('.item');
// console.log(itemEl);
// // itemEl.classList.add('open')
// const button=document.querySelectorAll('.icon');
// // console.log(button);
// button.forEach(function(item){
//     // console.log(item);
//     item.addEventListener('click',function(e){
//         // console.log('Button Clicked');
//         // console.log(e.path[1].classList.('open'));
//         e.path[1].classList.toggle('open')
//     })
// })