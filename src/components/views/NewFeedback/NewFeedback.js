import React, { Component } from 'react';
import NavButton from '../../structural-components/NavButton/NavButton';

class NewFeedback extends Component {
  render() {
    return (
      <div>
        <h3>Thank You</h3>
        <NavButton name="Leave New Feedback" path="/" />
      </div>
    );
  }
}

export default NewFeedback;