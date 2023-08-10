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
        className="start-button"
        style={{
          paddingLeft: timerOn ? '18%' : '24%',
          backgroundColor: timerOn ? '#31519d87' : '#e66158',
          cursor: 'pointer',
        }}
        onClick={() => {
          toggle();
        }}
      >
        <span>
          <img className="start-button-icon" src={pomodoroStartBtn}></img>
        </span>
        {timerOn ? 'Discard' : 'Start'}
      </div>
    </div>
  );
}
