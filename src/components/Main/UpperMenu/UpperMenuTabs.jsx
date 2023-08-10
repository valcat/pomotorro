import React from 'react';
import '../PomoApp.css';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTimerMode, setRemainingTimeToStartPoint} from '@/store/pomodoroSlice';
import {POMODORO_MODE, BREAK_MODE, POMODORO_TIME, BREAK_TIME} from '../../Constants';
import './UpperMenuTabs.css';

export default function UpperMenuTabs() {
  const mode = useSelector((state) => state.mode);
  const timerOn = useSelector(((state) => state.timerOn));
  const dispatch = useDispatch();

  return (
    <div className="pomo-card_tabs" >
      <span
        style={{ cursor: 'pointer' }}
        className={`tab ${mode === POMODORO_MODE ? `active` : ''}`}
        onClick={() => {
          if (!timerOn) {
            dispatch(toggleTimerMode(POMODORO_MODE));
            dispatch(setRemainingTimeToStartPoint(POMODORO_TIME));
          }
        }}
      >
        work
      </span>
      <span
        style={{ cursor: 'pointer' }}
        className={`tab ${mode === POMODORO_MODE ? '' : `active`}`}
        onClick={() => {
          if (!timerOn) {
            dispatch(toggleTimerMode(BREAK_MODE));
            dispatch(setRemainingTimeToStartPoint(BREAK_TIME));
          }
        }}
      >
        break
      </span>
    </div>
  );
}
