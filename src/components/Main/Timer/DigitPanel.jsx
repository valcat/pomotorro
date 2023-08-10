import { formatTimeIntoString } from './Timer';
import { useSelector } from 'react-redux';
import './DigitPanel.css';

export function DigitPanel() {
  const remainingTime = useSelector((state) => state.remainingTime);
  return (
    <div>
      <div className="digits-panel">
        <div className="digits" data-testid="time-string">
          {formatTimeIntoString(remainingTime)}
        </div>
      </div>
    </div>
  );
}
