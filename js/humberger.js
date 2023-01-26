const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-layout-flex');
// const content = document.querySelector("#content");

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
//   content.classList.toggle("blur");
//   body.classList.toggle("fixed");
});