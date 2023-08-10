import {describe, it, expect} from 'vitest';
import {screen} from '@testing-library/react';
import PomoList from '@components/Main/List/PomoList.jsx';
import {renderWithProviders} from '@/test/reactTestUtils.jsx';

describe('PomoList check', () => {
  it('renders a title with number of pomodoros', () => {
    const today = new Date().toISOString();
    renderWithProviders(<PomoList/>, {
      preloadedState: {
        listOfPomodoros: [{name: 'task 1', date: today},
          {name: 'task 2', date: today}]
      }
    });
    const title = screen.getByText(/done today \(2\)/i);
    expect(title).toBeInTheDocument();
  });

  it('renders a title if there are not any pomodoros', () => {
    renderWithProviders(<PomoList/>, {
      preloadedState: {
        listOfPomodoros: []
      }
    });
    const title = screen.getByText(/nothing done today yet.../i);
    expect(title).toBeInTheDocument();
  });

  it('renders a pomodoro name', () => {
    const today = new Date().toISOString();
    renderWithProviders(<PomoList/>, {
      preloadedState: {
        listOfPomodoros: [{name: 'reading', date: today}]
      }
    });
    const title = screen.getByText(/reading/i);
    expect(title).toBeInTheDocument();
  });
})



