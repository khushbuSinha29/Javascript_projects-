console.log('Hello');
const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel) => {
    // console.log(panel);
    panel.addEventListener('click',()=>{
        // console.log(e);
        // console.log(e.target.classList)
        // e.target.classList.toggle('active');
        // console.log(panel.classList)
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}