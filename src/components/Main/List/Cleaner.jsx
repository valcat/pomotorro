import {useDispatch} from 'react-redux';
import {cleanTodaysList} from '@/store/pomodoroSlice.js';
import {useEffect} from 'react';

export default function Cleaner() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanTodaysList());
  }, []);
  return <></>
}
