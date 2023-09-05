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
  const isEscapeKeyPressed =  evt.type === 'keydown' && (evt.key === 'Escape' || evt.key === 'Esc');
  const isMouseEvent = evt.type === 'mousedown';

  if (isEscapeKeyPressed  || isMouseEvent) {
    onSave(taskName);
  }
};

export {filterByToday, escapeAndMouseClickHandler};
