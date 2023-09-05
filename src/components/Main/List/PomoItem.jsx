import { useDispatch } from 'react-redux';

import { PomoItemEditInput } from './PomoItemEditInput';
import { editTaskDecription, setEditedTaskIndex, deleteTask } from '@/store/pomodoroSlice';
import './PomoItem.css';
import editIcon from '@/assets/edit-pomo.svg';
import trashIcon from '@/assets/trash-icon.svg';

const Item = ({ name, index, screen }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span className="pomo-text">{name ? '🍅 ' + name : '🍅 without note'}</span>
      <div className="pomo-item_icons">
        <div
          onClick={() => {
            dispatch(setEditedTaskIndex(index));
          }}
        >
          <img className="pomo-item-button" src={editIcon} alt="edit-icon-button"/>
        </div>
        <div
          onClick={() => {
            dispatch(setEditedTaskIndex(undefined));
            dispatch(deleteTask([screen, index]));
          }}
        >
          <img className="pomo-item-button" src={trashIcon} alt="trash-icon-button" />
        </div>
      </div>
    </>
  );
};

export function PomoItem({ taskObject, i, inEditMode, screen }) {
  const dispatch = useDispatch();

  const saveTask = (pomoName) => {
    dispatch(editTaskDecription([i, pomoName, screen]));
    dispatch(setEditedTaskIndex(undefined));
  };

  const Input = ({ text }) => (
    <PomoItemEditInput
      value={text}
      onSave={(pomoName) => {
        saveTask(pomoName);
      }}
    ></PomoItemEditInput>
  );

  return (
    <div className="pomo-item" key={i}>
      {inEditMode ? <Input text={taskObject.name} /> : <Item name={taskObject.name} index={i} screen={screen} />}
    </div>
  );
}
