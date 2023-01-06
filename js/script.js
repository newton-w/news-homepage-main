
const humbergur = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const html = document.querySelector('html');
const nav = document.querySelector('.nav');
const container = document.querySelector('.header-container');

humbergur.addEventListener('click', () => {
     humbergur.classList.toggle('active');
     menu.classList.toggle('active');

     if(humbergur.classList.contains('active')){
       body.style.background = 'hsl(233, 8%, 79%)';
       body.style.overflowY = 'hidden';
       html.style.overflowY= 'hidden';
     }else{
       body.style.background = 'hsl(36, 100%, 99%)';
       html.style.overflowY = 'visible';
       body.style.overflowY = 'visible';
     }
});

//sticky navbar
window.addEventListener('scroll', () => {
nav.classList.toggle('sticky', scrollY > 0);
});
