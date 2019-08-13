import {getFormTemplate} from "./form";
import {getTaskTemplate} from "./task";
import {getTasks} from '../data';
import {createElement} from '../render';

const tasks = getTasks();
let tasksCount = 7;
const tasksTemplate = `<div class="board__tasks">
                        ${getFormTemplate()}
                        ${tasks.slice(0, tasksCount - 1).map((it) => getTaskTemplate(it)).join(``)}
                      </div>`.trim();

const renderRestTasks = () => {
  const board = document.querySelector(`.board__tasks`);
  tasks.slice(tasksCount, tasksCount + 7).forEach((it) => board.appendChild(createElement(getTaskTemplate(it))));
  if (tasksCount >= tasks.length - 7) {
    return false;
  }
  tasksCount += 7;
  return true;
};

const tasksListTemplate = createElement(tasksTemplate);

export {tasksListTemplate, renderRestTasks};
