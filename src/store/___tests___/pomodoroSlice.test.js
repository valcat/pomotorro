import { describe, it, expect } from 'vitest';
import reducer, {
  toggleTimerMode, updateRemainingTime,
  setRemainingTimeToStartPoint, toggleTimer, toggleSoundOn, showPomodoroSaveForm,
  savePomodoroStartDate, addPomodoro, addPomodoroInEditTable, toggleInEditTaskMode,
  setEditedTaskIndex
} from '../pomodoroSlice';
import { POMODORO_MODE, POMODORO_TIME, BREAK_MODE, BREAK_TIME } from '../../components/Constants';

describe('Pomodoro reducer check', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
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
      }
    );
  });

  it('should change Timer mode to BREAK_MODE', () => {
    expect(reducer(undefined, toggleTimerMode(BREAK_MODE))).contain(
      {
        mode: BREAK_MODE,
      }
    )
  })

  it('should decrement remaining time by 1', () => {
    expect(reducer(undefined, updateRemainingTime(1499))).contain(
      {
        remainingTime: POMODORO_TIME - 1,
      }
    )
  })

  it('should changed remaining time from POMODORO_TIME to BREAK_TIME', () => {
    expect(reducer(undefined, setRemainingTimeToStartPoint(BREAK_TIME))).contain(
      {
        remainingTime: BREAK_TIME
      }
    )
  })

  it('should change active to true', () => {
    expect(reducer(undefined, toggleTimer(true))).contain(
      {
        timerOn: true
      }
    )
  })

  it('should change soundOn to true', () => {
    expect(reducer(undefined, toggleSoundOn(true))).contain(
      {
        soundOn: true
      }
    )
  })
})

it('it should change pomodoroIsDone to true', () => {
  expect(reducer(undefined, showPomodoroSaveForm(true))).contain(
    {
      pomodoroIsDone: true
    }
  )
})

it('it should update currentPomodoroStartDate', () => {
  expect(reducer(undefined, savePomodoroStartDate('2023-06-12T10:31:33.357Z'))).contain(
    {
      currentPomodoroStartDate: '2023-06-12T10:31:33.357Z'
    }
  )
})

it('it should add pomodoro to listOfPomodoros', () => {
  expect(reducer(undefined, addPomodoro({
    name: 'reading a book',
    date: '2023-06-12T07:16:43.203000'
  }))).toMatchObject(
    {
      listOfPomodoros: [{
        name: 'reading a book',
        date: '2023-06-12T07:16:43.203000'
      }]
    }
  )
})

it('it should add two pomodoros to listOfPomodorosInEditTable', () => {
  expect(reducer(undefined, addPomodoroInEditTable([{
    _id: '6486e4933aeb1694928d488f',
    name: 'reading a book',
    date: '2023-06-12T07:16:43.203000'
  }, {
    _id: '6486e4933aeb1694928d458z',
    name: 'coding api',
    date: '2023-06-12T09:16:43.203000'
  }]))).toMatchObject(
    {
      listOfPomodorosInEditTable: [{

        _id: '6486e4933aeb1694928d488f',
        name: 'reading a book',
        date: '2023-06-12T07:16:43.203000'
      }, {
        _id: '6486e4933aeb1694928d458z',
        name: 'coding api',
        date: '2023-06-12T09:16:43.203000'
      }
      ]
    }
  )
})

it('it should change inEditTaskMode to true', () => {
  expect(reducer(undefined, toggleInEditTaskMode(true))).contain(
    {
      inEditTaskMode: true
    }
  )
})

it('it should update editedTaskIndex to 1', () => {
  expect(reducer(undefined, setEditedTaskIndex(1))).contain(
    {
      editedTaskIndex: 1
    }
  )
})
