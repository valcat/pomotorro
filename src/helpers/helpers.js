const filterByToday = (array) => {
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0);

  return array.filter((element) => {
    let date = element.date;
    if (!(date instanceof Date)) {
      date = new Date(element.date)
    }
    return date > dayStart
  });
};

const escapeAndMouseClickHandler = function ({onSave, taskName, evt}) {
  evt = evt || window.event;
  if (evt.type === 'keydown' && (evt.key === 'Escape' || evt.key === 'Esc')) {
    onSave(taskName);
  } else if (evt.type === 'mousedown') {
    onSave(taskName);
  }
};

export {filterByToday, escapeAndMouseClickHandler};
