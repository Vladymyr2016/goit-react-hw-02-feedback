import React, { Component } from 'react';

class ExpressoBtn extends Component {
  render() {
    return (
      <div>
        <h1>Please leave your featbeak</h1>
        <button onClick={() => this.onLiveFeadback('good')}>Good</button>
        <button onClick={() => this.onLiveFeadback('neutral')}>Neutral</button>
        <button onClick={() => this.onLiveFeadback('bad')}>Bad</button>

        <h2>Statistics</h2>
        <ul>
          <li>
            <span>good: </span>
            <span>{this.state.good}</span>
          </li>
          <li>
            <span>Neutral: </span>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: </span>
            <span>{this.state.bad}</span>
          </li>
          <li>
            <span>Total: </span>
            <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>Positiv fedback: </span>
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ExpressoBtn;
