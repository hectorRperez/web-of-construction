// referencias al HTML
let btn_menu = document.querySelector('#btn_menu');
let navbar__list = document.querySelector('ul');
let btn_search = document.querySelector('#btn_search');
let navbar__form = document.querySelector('.navbar__form');
let navbar = document.querySelector('.navbar');
let login_form = document.querySelector('.login__form');
let bxs_user = document.querySelector('.bxs-user');
let info_circle = document.querySelector('.bxs-info-circle');
let contact__info = document.querySelector('.contact__info');
let close_contact_info = document.querySelector('#close-contact-info');

console.log(close_contact_info);

bxs_user.addEventListener('click', () => {
	login_form.classList.toggle('active');
	login_form.classList.toggle('animate__animated');
	login_form.classList.toggle('animate__fadeInDown');

	navbar__form.classList.remove('active');
	navbar__list.classList.remove('active');
});

btn_menu.addEventListener('click', () => {
	navbar__list.classList.toggle('active');
	navbar__list.classList.toggle('animate__animated');
	navbar__list.classList.toggle('animate__fadeInDown');
	navbar__form.classList.remove('active');
	login_form.classList.remove('active');
});

btn_search.addEventListener('click', () => {
	login_form.classList.remove('active');
	navbar__form.classList.toggle('active');
	navbar__list.classList.remove('active');
});

info_circle.addEventListener('click', () => {
	contact__info.classList.toggle('active');
	contact__info.classList.add('animate__animated');
	contact__info.classList.add('animate__fadeInDown');
});

close_contact_info.addEventListener('click', () => {
	contact__info.classList.toggle('active');
});

window.onscroll = () => {
	navbar__form.classList.remove('active');
	navbar__list.classList.remove('active');
	login_form.classList.remove('active');
	login_form.classList.remove('active');
};
