import {useDispatch, useSelector} from 'react-redux';
import {cleanTodaysList} from '@/store/pomodoroSlice.js';
import {useEffect} from 'react';

export default function Cleaner() {
  const list = useSelector((state) => state.listOfPomodoros);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanTodaysList());
  }, []);
  return <></>
}
