import React from 'react';
import { DigitPanel } from './DigitPanel';
import { StartStopButton } from './StartStopButton';

export function addLeadingZero(data) {
  const NUMBER_OF_SYMBOLS = 2; // for time format 00:00
  if (data.toString().length < NUMBER_OF_SYMBOLS) {
    return '0' + data;
  }

  return data;
}

export function formatTimeIntoString(remainingTime) {
  const SEC_IN_ONE_MIN = 60;
  const minutes = addLeadingZero(Math.floor(remainingTime / SEC_IN_ONE_MIN));
  const seconds = addLeadingZero(remainingTime - minutes * SEC_IN_ONE_MIN);

  return minutes + ':' + seconds;
}

export default function Timer() {
  return (
    <div>
      <DigitPanel></DigitPanel>
      <StartStopButton />
    </div>
  );
}
