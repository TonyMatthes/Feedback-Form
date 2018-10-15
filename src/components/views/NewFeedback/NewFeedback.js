import React, { Component } from 'react';
import NavButton from '../../structural-components/NavButton/NavButton';

class NewFeedback extends Component {
  render() {
    return (
      <div>
        <span>New Feedback</span>
        <NavButton name="New Feedback" path="/" />
      </div>
    );
  }
}

export default NewFeedback;