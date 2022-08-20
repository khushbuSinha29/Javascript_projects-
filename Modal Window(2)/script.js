'use strict';
 

// On clicking the buttons the modal screen will appear and then on clicking the x of the modal screen 
// the modal screen will close. The closing of modal screen can also be done on pressing anywhere on the screen 
// on on pressing the escape button 

const modal = document.querySelector('.modal');
console.log(modal);
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modalBtn = document.querySelectorAll('.show-modal');
// console.log(modalBtn);

modalBtn.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', function(){
        // console.log('button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeModalBtn.addEventListener('click', function(){
    closeModal();
});

// close anywhere on the screen.
overlay.addEventListener('click', closeModal);

// close screen with esc key
document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden'))
            closeModal();
    }

})
