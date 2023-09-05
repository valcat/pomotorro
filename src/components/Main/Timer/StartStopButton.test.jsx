import {describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test/reactTestUtils.jsx';
import { BrowserRouter } from 'react-router-dom'
import { StartStopButton } from './StartStopButton';

describe('StartStopButton check', () => {
  it('should have a timer-on class', async ()=>  {
    renderWithProviders(<BrowserRouter><StartStopButton /> </BrowserRouter>);

    const toggleButton = screen.getByTestId('toggle-pomodoro');

    await toggleButton.click();

    expect(toggleButton.classList.contains('timer-on')).toBe(true);
  });

  it('should have a corresponding style', async ()=>  {
    renderWithProviders(<BrowserRouter><StartStopButton /> </BrowserRouter>);

    const toggleButton = screen.getByTestId('toggle-pomodoro');

    expect(toggleButton).toHaveStyle('padding-left: 24%');
    // TODO: Need to figure out to validate the style that used a css variable from the global css file.
    // expect(toggleButton).toHaveStyle('background-color: var(--scarlet-red-color)');

    await toggleButton.click();

    expect(toggleButton).toHaveStyle('padding-left: 18%');
    expect(toggleButton).toHaveStyle('background-color: #e66158');
  });

  it('should not have a timer-on class', async ()=>  {
    renderWithProviders(<BrowserRouter><StartStopButton /> </BrowserRouter>);

    const toggleButton = screen.getByTestId('toggle-pomodoro');

    await toggleButton.click();
    await toggleButton.click();

    expect(toggleButton.classList.contains('timer-on')).toBe(false);
  });
})

