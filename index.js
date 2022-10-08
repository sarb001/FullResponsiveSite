// const headerbar = document.querySelector('#header-bar');

// document.onscroll = () =>
// {
//     if(window.scrollY > 0) { headerbar.classList.add('active')}
//     else {
//         headerbar.classList.remove('active')
//     }
// }

// document.onload = () =>
// {
//     if(window.scrollY > 0) { headerbar.classList.add('active')}
//     else {
//        headerbar.classList.remove('active')
//     }
// }


const pressbtn = document.querySelector('.ham-icon');

const navbar = document.querySelector('#ul-in');

pressbtn.addEventListener('click',() =>
{
     navbar.classList.toggle('active');
})

