'use strict';

// navbar transparent //
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// navbar menu link //
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Show "arrow up" button
const arrowUp = document.querySelector('.arrow-up');
    arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

// project //

const projectBtnContainer = document.querySelector('.portfolio__btn');
const projectListContainer = document.querySelector('.portfolio__list');
const projects = document.querySelectorAll('.project');
projectBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

// Remove selection from the previous item and select the new one
  const active = document.querySelector('.listbtn selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectListContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }

    });

    projectListContainer.classList.remove('anim-out');
  }, 300);
});

// when list__btn click background color changed //

var listbtn = document.getElementsByClassName("listbtn");

function handleClick(event) {
    for (var i = 0; i < listbtn.length; i++) {
      listbtn[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }

function init() {
    for (var i = 0; i < listbtn.length; i++) {
      listbtn[i].addEventListener("click", handleClick);
    }
  }

  init();

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
