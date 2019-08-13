import {renderElement} from "./components/render.js";
import {menuTemplate} from "./components/menu.js";
import {searchTemplate} from "./components/search.js";
import {filtersTemplate} from "./components/filters-list.js";
import {board} from "./components/board/board.js";

const main = document.querySelector(`.main`);
const menu = document.querySelector(`.control`);

renderElement(menuTemplate, menu);
renderElement(searchTemplate, main);
renderElement(filtersTemplate, main);
renderElement(board, main);
