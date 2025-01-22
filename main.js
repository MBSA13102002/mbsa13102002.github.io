
document.addEventListener("DOMContentLoaded", function() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.innerHTML = "<h1>Mobile me nahi , Please open this website on a laptop madam ji. Ik you will pull off some stunt like this.</h1>";
    } else {
        // Load the body normally
        document.body.style.display = "block";
    }
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})