import { useState } from 'react';

export default function App() {
  const date = new Date('July 12 2023');
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <Step />
      <Count />
      <Days />
    </div>
  );

  function Step() {
    return (
      <div className="step">
        <button onClick={() => Number(setStep(step - 1))}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => Number(setStep(step + 1))}>+</button>
      </div>
    );
  }
  function Count() {
    return (
      <div className="count">
        <button onClick={() => Number(setCount(count - Number(step)))}>
          -
        </button>
        <span>Count:{count}</span>
        <button onClick={() => Number(setCount(count + Number(step)))}>
          +
        </button>
      </div>
    );
  }
  function Days() {
    return (
      <div className="date">
        <span>
          {count < 0
            ? `${Math.abs(count)} days ago was`
            : count > 0
            ? `${count} days from today is `
            : ''}

          {date.toDateString()}
        </span>
      </div>
    );
  }
}
