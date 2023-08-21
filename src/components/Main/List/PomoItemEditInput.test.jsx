import {describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test/reactTestUtils.jsx';
import { BrowserRouter } from 'react-router-dom'
import userEvent from "@testing-library/user-event";
import { PomoItemEditInput } from '@components/Main/List/PomoItemEditInput.jsx';
import { POMODORO_TIME } from '@components/Constants.js';

describe('PomoItemEditInput check', () => {
  it('should', async ()=>  {
    renderWithProviders(<BrowserRouter><PomoItemEditInput /> </BrowserRouter>, {
      preloadedState: {
        pomodoroIsDone: false,
        listOfPomodoros: [],
        remainingTime: POMODORO_TIME,
      }
    });

    const formElement = screen.getByTestId('form-task-edit');
    const inputElement = screen.getByTestId("task-name-input");
    const newInputValue = "cooking";

    await userEvent.type(inputElement, newInputValue);
    await userEvent.type(formElement, "{enter}");

    const taskNameState = screen.getByTestId("task-name-input").value;
    expect(taskNameState).toBe(newInputValue);
  })
})

