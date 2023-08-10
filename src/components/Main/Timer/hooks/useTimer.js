import { useEffect } from 'react';
import { useState } from 'react';
import { POMODORO_MODE, DOCUMENT_TITLE, POMODORO_TIME, BREAK_TIME } from '@components/Constants';
import { formatTimeIntoString } from '../Timer';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTimer, updateRemainingTime,
  setRemainingTimeToStartPoint, showPomodoroSaveForm, savePomodoroStartDate
} from '@/store/pomodoroSlice';


const useTimer = () => {
  const [title, setTitle] = useState(DOCUMENT_TITLE);
  const dispatch = useDispatch();
  const timerOn = useSelector((state) => state.timerOn);
  const mode = useSelector((state) => state.mode);
  const currentPomodoroStartDate = useSelector((state) => state.currentPomodoroStartDate);
  const remainingTime = useSelector((state) => state.remainingTime);

  useEffect(() => {
    if (timerOn) {
      setTitle(formatTimeIntoString(remainingTime));
    }
    document.title = DOCUMENT_TITLE;
  }, [remainingTime]);

  useEffect(() => {
    if (timerOn && remainingTime === 0) {
      dispatch(showPomodoroSaveForm(true));
      endPomodoro();
    }
  }, [remainingTime]);

  useEffect(() => {
    let timerInterval, sessionTime;

    if (timerOn) {
      mode === POMODORO_MODE
        ? sessionTime = POMODORO_TIME
        : sessionTime = BREAK_TIME

      timerInterval = setInterval(() => {
        const now = new Date();
        const elapsedTimeInSec = Math.floor((now.getTime() -
          new Date(currentPomodoroStartDate).getTime()) / 1000);
        const time = sessionTime - elapsedTimeInSec;
        dispatch(updateRemainingTime(time));
      }, 1000)
    }
    return (() => { clearInterval(timerInterval) })
  }, [timerOn])


  function endPomodoro() {
    dispatch(setRemainingTimeToStartPoint(
      mode === POMODORO_MODE
        ? POMODORO_TIME
        : BREAK_TIME
    ));
    dispatch(toggleTimer(false));
    dispatch(savePomodoroStartDate({}))
  }

  function toggle() {
    if (!timerOn) {
      dispatch(toggleTimer(true));
      dispatch(savePomodoroStartDate((new Date).getTime()));
    } else {
      endPomodoro();
    }
  }

  return {
    toggle
  }
}

export default useTimer;
