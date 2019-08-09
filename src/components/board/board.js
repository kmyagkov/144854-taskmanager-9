import {getLoadMoreButtonTemplate} from "./load-more";
import {getSortTemplate} from "./sort";
import {getTasksListTemplate} from "./tasks-list";

export const getBoardTemplate = () => {
  return `<section class="board container">
            ${getSortTemplate()}
            ${getTasksListTemplate()}
            ${getLoadMoreButtonTemplate()}
          </section>`;
};
