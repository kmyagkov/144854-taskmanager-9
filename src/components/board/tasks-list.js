import {getFormTemplate} from "./form";
import {getTaskTemplate} from "./task";

export const getTasksListTemplate = () => {
  const tasks = new Array(3).fill().map(getTaskTemplate);
  return `<div class="board__tasks">
            ${getFormTemplate()}
            ${tasks.join(``)}
          </div>`;
};
