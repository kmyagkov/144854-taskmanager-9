import {createElement} from "./render";
import {getTasks} from "./data";
import {getFilterTemplate} from "./filter";

const tasks = getTasks();
const filters = [
  {
    title: `All`,
    get count() {
      return tasks.length;
    }
  },
  {
    title: `Overdue`,
    get count() {
      return tasks.filter((it) => it[`dueDate`] < Date.now()).length;
    }
  },
  {
    title: `Today`,
    get count() {
      return tasks.filter((it) => it[`dueDate`] < Date.now() + 24 * 60 * 60 * 1000 && it[`dueDate`] > Date.now() - 24 * 60 * 60 * 1000).length;
    }
  },
  {
    title: `Favorites`,
    get count() {
      return tasks.filter((it) => it[`isFavorite`]).length;
    }
  },
  {
    title: `Repeating`,
    get count() {
      return tasks.filter((it) => Object.keys(it[`repeatingDays`]).some((day) => it[`repeatingDays`][day])).length;
    }
  },
  {
    title: `Tags`,
    get count() {
      return tasks.filter((it) => it[`tags`].size).length;
    }
  },
  {
    title: `Archive`,
    get count() {
      return tasks.filter((it) => it[`isArchive`]).length;
    }
  },
];

const template = `<section class="main__filter filter container">
                    ${filters.map((it) => getFilterTemplate(it)).join(``)}
                  </section>`.trim();

export const filtersTemplate = createElement(template);
