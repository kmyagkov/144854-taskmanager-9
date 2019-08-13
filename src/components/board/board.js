import {loadMoreButtonTemplate} from "./load-more";
import {sortTemplate} from "./sort";
import {tasksListTemplate} from "./tasks-list";
import {createElement} from "../render";
import {renderElement} from "../render";

const template = `<section class="board container"></section>`.trim();
const board = createElement(template);

renderElement(sortTemplate, board);
renderElement(tasksListTemplate, board);
renderElement(loadMoreButtonTemplate, board);

export {board};
