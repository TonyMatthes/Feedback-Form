import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import NavButton from '../../structural-components/NavButton/NavButton';
import Button from '@material-ui/core/Button'

class Comments extends Component {
  state = {
    comments:''
  }
  handleChange = () => event => {
    this.setState({
      comments: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <span>comments</span>
        <TextField
          label="Comments?"
          multiline
          rowsMax="4"
          value={this.state.comments}
          onChange={this.handleChange()}
          margin="normal"
        />
              <NavButton name="Back" path="/3" />
              <Button>Submit</Button>

      </div>
    );
  }
}

export default Comments;
