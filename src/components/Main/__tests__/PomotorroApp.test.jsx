import {describe, it, expect, vi} from 'vitest';
import {fireEvent, screen} from '@testing-library/react';
import {renderWithProviders} from '@/test/reactTestUtils.jsx';
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';

import PomoApp from '@components/Main/PomoApp.jsx';
import {POMODORO_TIME} from '@components/Constants.js';
import '../setupTests.js';

describe('', () => {
  it('should render \'Save pomodoro\' title', () => {
    renderWithProviders(<BrowserRouter><PomoApp/> </BrowserRouter>, {
      preloadedState: {
        pomodoroIsDone: true
      }
    });
    const title = screen.getByText(/Save pomodoro/i);
    expect(title).toBeInTheDocument();
  })

  it('should render 25\:00', () => {
    renderWithProviders(<BrowserRouter><PomoApp/> </BrowserRouter>, {
      preloadedState: {
        pomodoroIsDone: false,
        listOfPomodoros: [],
        remainingTime: POMODORO_TIME,
      }
    });
    const time = screen.getByText(/25\:00/i);
    expect(time).toBeInTheDocument();
  })

  it('should render work and break tabs', () => {
    renderWithProviders(<BrowserRouter><PomoApp/> </BrowserRouter>, {
      preloadedState: {
        pomodoroIsDone: false,
        listOfPomodoros: [],
        remainingTime: POMODORO_TIME,
      }
    });
    const tabWork = screen.getByText(/work/i);
    const tabBreak = screen.getByText(/break/i);
    expect(tabWork, tabBreak).toBeInTheDocument();
  })

  it('should render Start button', () => {
    renderWithProviders(<BrowserRouter><PomoApp>

    </PomoApp></BrowserRouter>, {
      preloadedState: {
        pomodoroIsDone: false,
        listOfPomodoros: [],
        remainingTime: POMODORO_TIME,
      }
    });
    const btnName = screen.getByText(/Start/i);
    expect(btnName).toBeInTheDocument();
  });


  it('should render Stop button', () => {

    renderWithProviders(<BrowserRouter>
      <PomoApp/>
    </BrowserRouter>, {
      preloadedState: {
        pomodoroIsDone: false,
        listOfPomodoros: [],
        remainingTime: POMODORO_TIME,
      }
    });

    const btn = screen.getByText(/Start/i);
    fireEvent.click(btn);
    const btnName = screen.getByText(/Discard/i);
    expect(btnName).toBeInTheDocument();
  })
})
