// console.log('Testing');
const jokeText = document.querySelector('.joke--container');
// console.log(jokeContainer);
const button = document.querySelector('.btn');

const generateJoke = () => {
fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json' // setting header to this means explicitly asking for JSON data
        // since some API servers might work with multiple formats : JSON, XML etc.
    }
})
.then(function(response){
    // console.log(response)
    if(!response.ok) 
        new Error(`There is an error: with response status ${response.staus} with test ${response.statusText} `)
    return response.json();
}).then(function(data){
    // console.log(data);
    // console.log(data.joke);
   jokeText.textContent = data.joke;
}).catch(err => {
    // console.log(err);
    jokeText.textContent = "Oops! Some Error Occured :("
})
}

// generateJoke();

button.addEventListener('click', ()=>{
    // console.log('button clicked');
    generateJoke();
})