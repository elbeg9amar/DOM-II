// Your code goes here
const logoOver = document.querySelector('.logo-heading')

logoOver.addEventListener('click', (event) => {
    return event.target.style.fontSize = "20px";
});
logoOver.addEventListener('mouseover', (event) => {
    return event.target.style.fontSize = "60px";
});

const allParag = document.querySelectorAll('p');
allParag.forEach(index => {
    index.addEventListener('mouseover',(event) => {
         event.target.style.fontFamily = 'Indie Flower', 'cursive';
    });
    index.addEventListener('mouseleave',(event) => {
        event.target.style = 'initial';
   });
});

const allImg = document.querySelectorAll('img');
allImg.forEach(index => {
    index.addEventListener('mouseover',(event) => {
            event.target.style.borderColor = 'black';
            event.target.style.border = '1rem';
            event.target.style.borderStyle = 'solid';
    });
    index.addEventListener('mouseleave', (event) => {
        event.target.style = 'initial';
    });
});

allImg.forEach(el => {
    el.addEventListener('keydown', (event) => {
        event.target.style.maxWidth = '110%'
    });
});

const allHeader = document.querySelectorAll('h1, h2, h4');
allHeader.forEach(index =>{
    index.addEventListener('mouseover',(event) => {
        return event.target.style.fontSize = '5rem';
    });
    index.addEventListener('mouseleave',(event) => {
        event.target.style = 'initial';
    });
});

const allLinks = document.querySelectorAll('a');
allLinks.forEach(index => {
    index.addEventListener('focus', (event) =>{ 
        console.log(event)
        event.target.style.fontSize = '2.5rem'
        event.target.style.color = 'solid black';
    });
    index.addEventListener('mouseleave', (event) =>{ 
        event.target.style = 'initial';
    });
});



const signUp = document.querySelectorAll('.btn');
const allText = document.all;
signUp.forEach(index => {
    index.addEventListener('click', () =>{
        window.addEventListener('dblclick', () => {
            console.log('Iam here')
        });
    });
})