
"use strict"

/*--------------------------------------------------------------
# Nav
--------------------------------------------------------------*/
const navMenu = document.querySelector('[data-js="nav-menu"]'),
  navToggle = document.querySelector('[data-js="nav-toggle"]'),
  navClose = document.querySelector('[data-js="nav-close"]'),
  navLinks = document.querySelectorAll('.nav__link')

function menuLinkClick() {
  navMenu.classList.remove('show-menu');
}

navToggle.addEventListener('click', () => {
  navMenu.classList.contains('show-menu')
    ? navMenu.classList.remove('show-menu')
    : navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
  navMenu.classList.contains('show-menu')
    ? navMenu.classList.remove('show-menu')
    : navMenu.classList.add('show-menu')
})

const linkAction = () => {
  navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction))

/*--------------------------------------------------------------
# Google Form
--------------------------------------------------------------*/
window.addEventListener("load", function () {
  const form = document.getElementById('send-form');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    document.querySelector('.btn-submit-form').setAttribute('disabled', 'disabled');
    document.querySelector('.btn-submit-form').innerHTML = 'Enviando...';
    fetch(action, {
      method: 'POST',
      body: data,
      cache: 'no-cache',
      redirect: 'follow',
      mode: 'no-cors',
      payload: data
    })
      .then(() => {
        document.querySelector('.alert-success').classList.remove('d-none');
        document.querySelector('.btn-submit-form').classList.add('d-none');
      })
  });
});