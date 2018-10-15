import React, { Component } from 'react';
import Selector from '../../structural-components/Selector/Selector'
import NavButton from '../../structural-components/NavButton/NavButton';
import Paper from '@material-ui/core/Paper'

class Supported extends Component {
  render() {
    return (
      <Paper>
        <h3>Did you feel supported by Prime staff today?</h3>
        <NavButton name="back" path="/2" />
        <Selector dispatcher="SUPPORTED"></Selector>
        <NavButton name="next" path="/4" />
      </Paper>
    );
  }
}

export default Supported;