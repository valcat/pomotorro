import {useSelector} from 'react-redux';
import {PomoItem} from './PomoItem';
import './PomoList.css';
import Cleaner from '@components/Main/List/Cleaner.jsx';
import {selectEditedTaskIndex, selectTodaysPomos} from '@/store/pomodoroSlice.js';
import coffeeIcon from '@/assets/coffee-icon.svg'


export default function PomoList() {
  const list = useSelector(selectTodaysPomos);
  const editedTaskIndex = useSelector(selectEditedTaskIndex);

  return (
    <div>
      <div className="pomo-list-header">
        <div>done today ({list.length})</div>
      </div>
      <Cleaner></Cleaner>
      <div className="pomo-list">
        {list.length ? (
          list.map((task, i) => {
            const inEditMode = i === editedTaskIndex;
            return <PomoItem taskObject={task} i={i} key={i} inEditMode={inEditMode} id={list[i]._id} screen="main"/>;
          })
        ) : (
          <div className="empty-pomo-list">
            <div className="empty-pomo-list_icon">
              <img src={coffeeIcon} alt="coffee-icon"/>
            </div>
            <div>
              {'nothing done today yet...'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
