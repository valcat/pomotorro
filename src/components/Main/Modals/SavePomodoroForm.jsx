import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addPomodoro, showPomodoroSaveForm } from '@/store/pomodoroSlice';
import './SavePomodoroForm.css';
import { setRemainingTimeToStartPoint, toggleTimerMode } from '@/store/pomodoroSlice';
import { POMODORO_MODE, POMODORO_TIME } from '@components/Constants';
import closeIcon from '@/assets/close-btn.svg';

export default function SavePomodoroForm() {
  const pomodoroIsDone = useSelector((state) => state.pomodoroIsDone);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState(new Date(Date.now()));

  const handleSubmit = (event) => {
    event.preventDefault();
    setTime(new Date(Date.now()));
  };

  const savePomodoro = () => {
    dispatch(addPomodoro({ name: taskName, date: time }));
    dispatch(showPomodoroSaveForm(false));
    dispatch(toggleTimerMode(POMODORO_MODE));
    dispatch(setRemainingTimeToStartPoint(POMODORO_TIME));
  };

  return (
    <div style={{ display: pomodoroIsDone ? 'block' : 'none' }}>
      <div id="cover-background"></div>
      <div className="pomo-popup save-pomo-popup">
        <div className="form-header">
          <Link to="/">
            <div className="close-form-icon">
              <img src={closeIcon} alt="Close button" onClick={() => dispatch(showPomodoroSaveForm(false))}></img>
            </div>
          </Link>
        </div>
        <div className="form-body">
          <h2> Save pomodoro </h2>
          <form onSubmit={handleSubmit}>
            <input
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              className="form__input"
              type="text"
              name="task-name"
              placeholder="Task Name"
            />
          </form>
          <Link to="/">
            <button className="save-button" onClick={() => {savePomodoro()}}>
              Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
