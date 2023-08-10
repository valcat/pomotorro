import React from 'react';
import './PomoApp.css';
import Timer from './Timer/Timer';
import UpperMenuTabs from './UpperMenu/UpperMenuTabs';
import UpperMenuIcons from './UpperMenu/UpperMenuIcons';
import SavePomodoroForm from './Modals/SavePomodoroForm';
import Player from './Player';
import PomoList from './List/PomoList.jsx';
import { useSelector } from 'react-redux';

export default function PomoApp() {
  const pomodoroIsDone = useSelector((state) => state.pomodoroIsDone);

  return (
    <>
      <Player></Player>
      {pomodoroIsDone ? (
        <SavePomodoroForm />
      ) : (
        <div className="pomo-card">
          <div className="pomo-card_header">
            <UpperMenuTabs />
            <UpperMenuIcons />
          </div>
          <Timer />
          <PomoList />
        </div>
      )}
    </>
  );
}
