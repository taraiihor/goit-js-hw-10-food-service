import itemsTemplate from '../template/card.hbs';
import menu from '../template/menu.json';

const menuCardRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
menuCardRef.insertAdjacentHTML('beforeend', markup)