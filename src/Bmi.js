import React, { useState, useRef } from 'react';
import './Bmi.css';

function BmiCalculator() {
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const [bmiValue, setBmiValue] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBmi = () => {
    const heightValue = parseFloat(heightRef.current.value);
    const weightValue = parseFloat(weightRef.current.value);

    if (!isNaN(heightValue) && !isNaN(weightValue)) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = '';
      if (bmi < 18.5) {
        message = 'You are Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight';
      } else {
        message = 'You are Obese';
      }
      setBmiMessage(message);
    } else {
      setBmiValue('');
      setBmiMessage('');
    }
  };

  return (
    <div className="container">
      <h1></h1>
      <div className="input-container">
        <label htmlFor="height">Enter Your Height (cm):</label>
        <input
          type="number"
          id="height"
          ref={heightRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Enter Your Weight (kg):</label>
        <input
          type="number"
          id="weight"
          ref={weightRef}
        />
      </div>
      <button className="calculate-btn" onClick={calculateBmi}>
        Click to Calculate BMI
      </button>
      {bmiValue && bmiMessage && (
        <div className="result">
          <BmiText bmi={bmiValue} />
        </div>
      )}
    </div>
  );
}

const BmiText = ({ bmi }) => {
  let message = '';

  if (bmi < 18.5) {
    message = 'You are Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    message = 'You are Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    message = 'You are Overweight';
  } else {
    message = 'You are Obese';
  }

  return (
    <div>
      <p>
        Your BMI: <span className="bmi-value">{bmi}</span>
      </p>
      <p>
        Result: <span className="bmi-message">{message}</span>
      </p>
    </div>
  );
};

export default BmiCalculator;
