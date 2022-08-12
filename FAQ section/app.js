//using selectors inside the element
// traversing the dom


// Worked for 1st element using querySelector as it selects the 1st element. 

// Using selectors inside the element

const questions = document.querySelectorAll('.question');
// console.log(questions); 
questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(){
        // console.log(e.currentTarget);

        // functionality for removing the remaining open items, so at a time only one item can be opened.
        questions.forEach(function(item){
            console.log(item);
            if(item !== question){
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle('show-text');
    });
});

// Traversing the DOM 
// const btns = document.querySelectorAll('.question-btn');
// // console.log(btns); return a nodelist 

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
    
//     })
// })

// above functionality is left to implement in this method.

