import {renderRestTasks} from "./tasks-list";

const template = `<button class="load-more" type="button">load more</button>`.trim();

const el = document.createElement(`div`);
el.insertAdjacentHTML(`beforeEnd`, template);

const buttonElement = el.querySelector(`.load-more`);

buttonElement.addEventListener(`click`, () => {
  if (!renderRestTasks()) {
    buttonElement.style.display = `none`;
  }
});

export const loadMoreButtonTemplate = el.firstElementChild;
