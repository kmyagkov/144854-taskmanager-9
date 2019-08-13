const getTask = () => ({
  description: [
    `Learn theory`,
    `Make homework`,
    `Complete intensive at rating 100`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000),
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ]),
  repeatingDays: {
    mo: false,
    tu: false,
    we: Boolean(Math.round(Math.random())),
    th: false,
    fr: false,
    sa: false,
    su: false,
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
});

export const getTasks = () => {
  return new Array(Math.floor(Math.random() * 100)).fill(``).map(() => getTask());
};

