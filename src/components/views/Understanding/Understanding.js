import React, { Component } from 'react';
import Selector from '../../structural-components/Selector/Selector'
import NavButton from '../../structural-components/NavButton/NavButton';
import Paper from '@material-ui/core/Paper'

class Understanding extends Component {
  render() {
    return (
      <Paper>
        <h3>How well did you understand today's material?</h3>
        <NavButton name="back" path="/" />
        <Selector dispatcher="UNDERSTANDING"></Selector>
        <NavButton name="next" path="/3" />
      </Paper>
    );
  }
}

export default Understanding;