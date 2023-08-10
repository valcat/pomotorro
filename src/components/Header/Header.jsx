import React from 'react';
import './Header.css';
import logoImg from '@/assets/logo.svg'

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="pomo-logo">
          <span>
            <img src={logoImg} alt="Logo with pomodoro"></img>
          </span>
          <span className="pomo-log_text">pomotorro</span>
        </div>
      </div>
    </div>
  );
}
