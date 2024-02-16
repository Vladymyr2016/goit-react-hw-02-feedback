import React from 'react';
import ExpressoBtn from './ExpressoBtn/ExpressoBtn';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ExpressoBtn />
    </div>
  );
};
