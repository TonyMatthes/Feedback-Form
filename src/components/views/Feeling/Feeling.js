import React, { Component } from 'react';
import Selector from '../../structural-components/Selector/Selector'
import NavButton from '../../structural-components/NavButton/NavButton';
import Paper from '@material-ui/core/Paper'
class Feeling extends Component {
  render() {
    return (
      <Paper>
        <h3>How are you feeling today?</h3>
        <Selector dispatcher="FEELING"></Selector>
        <NavButton name="next" path="/2" />
      </Paper>
    );
  }
}

export default Feeling;