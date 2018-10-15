import React, { Component } from 'react';
import Selector from '../../structural-components/Selector/Selector'
import NavButton from '../../structural-components/NavButton/NavButton';

class Supported extends Component {
  render() {
    return (
      <div>
      <span>Did you feel supported by Prime staff today?</span>
      <Selector dispatcher="SUPPORTED"></Selector>
      <NavButton name="next" path="/4" />
      <NavButton name="back" path="/2" />
      </div>
    );
  }
}

export default Supported;