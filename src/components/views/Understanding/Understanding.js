import React, { Component } from 'react';
import Selector from '../../structural-components/Selector/Selector'
import NavButton from '../../structural-components/NavButton/NavButton';

class Understanding extends Component {
  render() {
    return (
      <div>
        <span>How well did you understand today's material?</span>
        <Selector dispatcher="UNDERSTANDING"></Selector>
        <NavButton name="next" path="/3" />
        <NavButton name="back" path="/" />


      </div>
    );
  }
}

export default Understanding;