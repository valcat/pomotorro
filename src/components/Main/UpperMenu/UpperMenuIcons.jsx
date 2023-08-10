import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSoundOn } from '@/store/pomodoroSlice';
import '../PomoApp.css';
import soundIcon from '@/assets/volume-icon.svg';
import slidersIcon from '@/assets/sliders-icon.svg';
import './UpperMenuIcons.css';

export default function UpperMenuIcons() {
  const cardOnClass = 'svg-filter-black';
  const cardOffClass = 'svg-filter-grey';

  const soundOn = useSelector((state) => state.soundOn);
  const dispatch = useDispatch();


  function onOffSound() {
    dispatch(toggleSoundOn(!soundOn));
  }

  return (
    <div className="pomo-card_icons">
      <img
        data-testid="toggle-sound"
        className={`pomo-card_icon ${soundOn ? cardOnClass : cardOffClass}`}
        alt="Button for switching sound"
        src={soundIcon}
        onClick={onOffSound}
      ></img>
      <img className="pomo-card_icon display-none" alt="Button with settings" src={slidersIcon}></img>
    </div>
  );
}
