import React from 'react';
import useTimer from './hooks/useTimer';
import {useSelector} from 'react-redux';
import pomodoroStartBtn from '@/assets/pomodoro.png';
import './StartStopButton.css';

export function StartStopButton() {
  const timerOn = useSelector((state) => state.timerOn);
  const {toggle} = useTimer();

  return (
    <div>
      <button
        data-testid="toggle-pomodoro"
        className={`start-button ${timerOn ? 'btn-timer-on' : ''}`}
        onClick={toggle}
      >
        {
          !timerOn ?
            <>
              <div className="button-icon">
                <img alt="Tomato icon" className={`start-button-icon ${timerOn ? 'btn-icon-timer-on' : ''}`} src={pomodoroStartBtn}></img>
              </div>
              <span className="btn-text">Start</span>
            </>
            :
            <>
              <div className={`button-icon ${timerOn ? 'btn-icon-timer-on' : ''}`}>
                <img alt="Tomato icon" className="start-button-icon" src={pomodoroStartBtn}></img>
              </div>
              <span className={`btn-text ${timerOn ? 'btn-text-timer-on' : ''}`}>Discard</span>
            </>
        }
      </button>
    </div>
  );
}
