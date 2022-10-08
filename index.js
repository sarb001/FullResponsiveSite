

const pressbtn = document.querySelector('.ham-icon');

const navbar = document.querySelector('#ul-in');

pressbtn.addEventListener('click',() =>
{
     navbar.classList.toggle('active');
})

