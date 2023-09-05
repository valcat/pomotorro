import React from 'react';
import useTimer from './hooks/useTimer';
import { useSelector } from 'react-redux';
import pomodoroStartBtn from '@/assets/pomodoro.png'
import './StartStopButton.css';

export function StartStopButton() {
  const timerOn = useSelector((state) => state.timerOn);
  const { toggle } = useTimer();

  return (
    <div>
      <div
        data-testid="toggle-pomodoro"
        className={`start-button ${timerOn ? 'timer-on' : ''}`}
        onClick={toggle}
      >
        <span>
          <img className="start-button-icon" src={pomodoroStartBtn}></img>
        </span>
        {timerOn ? 'Discard' : 'Start'}
      </div>
    </div>
  );
}
