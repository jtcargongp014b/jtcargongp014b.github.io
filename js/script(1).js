// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const menubur = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
  if (!menubur.contains(e.target)){
    navbarNav.classList.remove('active')
  }
})