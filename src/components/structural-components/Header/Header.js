import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
<h1>Feedback!</h1>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withTheme()(Header);
