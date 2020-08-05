// Your code goes here
const logoOver = document.querySelector('.logo-heading')

logoOver.addEventListener('select', (event) => {
    return event.target.style.fontSize = "20px";

    event.preventDefault ()
});
logoOver.addEventListener('click', (event) => {
    return event.target.style.fontSize = "60px";
});

const allParag = document.querySelectorAll('p, img');
allParag.forEach(index => {
    index.addEventListener('mouseover',(event) => {
         event.target.style.fontFamily = 'Indie Flower', 'cursive';
    });
});

const allImg = document.querySelectorAll('img');
allImg.forEach(index => {
    index.addEventListener('mouseover',(event) => {
        console.log(event.target.style)
            event.target.style.borderColor = 'green';
            event.target.style.border = '1rem';
            event.target.style.borderStyle = 'solid';
    });
});

const allHeader = document.querySelectorAll('h1, h2, h4');
allHeader.forEach(index =>{
    index.addEventListener('mouseover',(event) => {
        event.target.style.fontSize = '5rem';
    });
});
