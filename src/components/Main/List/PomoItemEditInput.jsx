import { useState, useEffect, useRef } from 'react';
import './PomoItemEditInput.css';
import { escapeAndMouseClickHandler } from '@/helpers/helpers.js';

export function PomoItemEditInput({ value, onSave }) {
  const [taskName, setTaskName] = useState(value);
  const editInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(taskName);
  };

  useEffect(() => {
    const handleEscapeAndMouseClick = (event) => {
      escapeAndMouseClickHandler({ onSave, taskName: taskName, evt: event });

    };

    document.addEventListener('keydown', handleEscapeAndMouseClick);

    const handleOutsideClick = (event) => {
      if (editInputRef.current?.contains(event.target) === false) {
        handleEscapeAndMouseClick(event);
      }
    };
      document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleEscapeAndMouseClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={editInputRef} className="pomo-item-edit-input">
      <form onSubmit={handleSubmit} data-testid="form-task-edit">
        <span className="pomo-icon">🍅</span>
        <input
          autoFocus
          value={taskName ?? ''}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          className="pomo-form__input"
          type="text"
          name="task-name"
          placeholder=""
          data-testid="task-name-input"
        />
      </form>
    </div>
  );
}
