import { createSlice } from '@reduxjs/toolkit';
import { MAIN_SCREEN, POMODORO_MODE, POMODORO_TIME } from '../components/Constants';
import { filterByToday } from '@/helpers/helpers.js';

export const initialState = {
  mode: POMODORO_MODE,
  remainingTime: POMODORO_TIME,
  timerOn: false,
  soundOn: false,
  playerOn: false,
  pomodoroIsDone: false,
  currentPomodoroStartDate: '',
  listOfPomodoros: [],
  listOfPomodorosInEditTable: [],
  inEditTaskMode: false,
  editedTaskIndex: undefined,
};

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState: { ...initialState },
  reducers: {
    toggleTimerMode: (state, action) => {
      state.mode = action.payload;
      state.timerOn = false;
    },
    setRemainingTimeToStartPoint: (state, action) => {
      state.remainingTime = action.payload;
    },
    updateRemainingTime: (state, action) => {
      state.remainingTime = action.payload
    },
    toggleTimer: (state, action) => {
      state.timerOn = action.payload;
    },
    toggleSoundOn: (state, action) => {
      state.soundOn = action.payload;
    },
    savePomodoroStartDate: (state, action) => {
      state.currentPomodoroStartDate = action.payload;
    },
    showPomodoroSaveForm: (state, action) => {
      state.pomodoroIsDone = action.payload;
    },
    addPomodoro: (state, action) => {
      state.listOfPomodoros.push(action.payload)
    },
    cleanTodaysList: (state) => {
      state.listOfPomodoros = filterByToday(state.listOfPomodoros);
    },
    addPomodoroInEditTable: (state, action) => {
      state.listOfPomodorosInEditTable = action.payload;
    },
    editTaskDecription: (state, action) => {
      action.payload[2] === MAIN_SCREEN ?
        state.listOfPomodoros[action.payload[0]].name = action.payload[1] :
        state.listOfPomodorosInEditTable[action.payload[0]].name = action.payload[1]
    },
    deleteTask: (state, action) => {
      action.payload[0] === MAIN_SCREEN ?
        state.listOfPomodoros.splice(action.payload[1], 1) :
        state.listOfPomodorosInEditTable.splice(action.payload[1], 1)
    },
    toggleInEditTaskMode: (state, action) => {
      state.inEditTaskMode = action.payload;
    },
    setEditedTaskIndex: (state, action) => {
      state.editedTaskIndex = action.payload;
    },
    setToInitialState: () => initialState,
  },
});

export const selectTodaysPomos = (state) => state.listOfPomodoros
export const selectEditedTaskIndex = (state) => state.editedTaskIndex;

export const {
  toggleTimerMode,
  setRemainingTimeToStartPoint,
  updateRemainingTime,
  toggleTimer,
  showPomodoroSaveForm,
  toggleSoundOn,
  savePomodoroStartDate,
  addPomodoro,
  cleanTodaysList,
  addPomodoroInEditTable,
  editTaskDecription,
  deleteTask,
  toggleInEditTaskMode,
  setEditedTaskIndex,
  setToInitialState
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;

