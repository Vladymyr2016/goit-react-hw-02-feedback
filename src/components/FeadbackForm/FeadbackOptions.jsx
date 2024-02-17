import React from 'react';

const FeadbackOptions = ({ options, onLiveFeadback }) => {
  return (
    <div>
      <h1>Please leave your featbeak</h1>
      {options.map(option => (
        <button key={option} onClick={() => onLiveFeadback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeadbackOptions;
