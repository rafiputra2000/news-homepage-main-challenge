// const hamburger = document.querySelector('.hamburger');
// const navLink = document.querySelector('.nav-layout-flex');

// hamburger.addEventListener('click', () => {
//   navLink.classList.toggle('hide');
// });

// const hamburger = document.querySelector('.hamburger');
// const navLink = document.querySelector('.sideNav');

// hamburger.addEventListener('click', () => {
//   navLink.classList.toggle('hide');
// });

function openNav(){
  document.getElementById("sidenav").style.width = "50%"
  document.getElementById("sidenav").style.display = "block";
}

function closeNav(){
  document.getElementById("sidenav").style.width = "0%"
  document.getElementById("sidenav").style.display = "none";
}