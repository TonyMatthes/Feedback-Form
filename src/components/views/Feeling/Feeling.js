import React, { Component } from 'react';
import Selector from '../../structural-components/Selector/Selector'
import NavButton from '../../structural-components/NavButton/NavButton';

class Feeling extends Component {
  render() {
    return (
      <div>
        <span>How are you feeling today?</span>
        <Selector dispatcher="FEELING"></Selector>
        <NavButton name="next" path="/2" />
      </div>
    );
  }
}

export default Feeling;