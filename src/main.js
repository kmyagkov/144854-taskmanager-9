import render from './components/render.js';
import {getMenuTemplate} from './components/menu.js';
import {getSearchTemplate} from './components/search.js';
import {getFiltersTemplate} from './components/filters.js';
import {getBoardTemplate} from './components/board/board.js';

const main = document.querySelector(`.main`);
const menu = document.querySelector(`.control`);

render(menu, getMenuTemplate());
render(main, getSearchTemplate());
render(main, getFiltersTemplate());
render(main, getBoardTemplate());
