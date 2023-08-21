import { useSelector } from 'react-redux';
import clockSound from '@/assets/sounds/clock-sound.mp3';

if (document.audioPlayer === undefined) {
  document.audioPlayer = new Audio(clockSound);
  document.audioPlayer.loop = true;
}

const play = () => {
  document.audioPlayer.play();
  document.audioPlayer.loop = true;
};

const stop = () => {
  document.audioPlayer.pause();
};

const mute = () => {
  document.audioPlayer.muted = true;
};

const unMute = () => {
  document.audioPlayer.muted = false;
};

export default function Player() {
  const soundOn = useSelector((state) => state.soundOn);
  const timerOn = useSelector((state) => state.timerOn);

  return (
    <>
      {soundOn ? unMute() : mute()}
      {timerOn ? play() : stop()}
    </>
  );
}
