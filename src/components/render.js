const createElement = (template) => {
  const elem = document.createElement(`div`);
  elem.insertAdjacentHTML(`beforeEnd`, template);
  return elem.children[0];
};

const renderElement = (element, container) => {
  container.appendChild(element);
};

export {createElement, renderElement};
