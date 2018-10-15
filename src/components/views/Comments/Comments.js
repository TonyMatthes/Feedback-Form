import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import NavButton from '../../structural-components/NavButton/NavButton';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper'


class Comments extends Component {
  state = {
    open: false,
    comments: '',
  }
  handleClickOpen = () => {
    this.props.dispatch({ type: 'COMMENTS', payload: this.state.comments });
    this.setState({ ...this.state, open: true, })
  };


  handleClose = () => {
    this.setState({ open: false, });
  };

  handleChange = () => event => {
    this.setState({
      ...this.state,
      comments: event.target.value,
    });
  };

  postFeedback = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props
    }).then(() => {
      this.props.history.push('/5')
    }).catch(error => {
      console.log('Error in POST:', error);
    });

  }

  render() {
    return (
      <Paper>
        <h3>Is there anything else you'd like us to know?</h3>
        <NavButton name="Back" path="/3" />
        <TextField
          label="Any Comments?"
          multiline
          rowsMax="4"
          value={this.state.comments}
          onChange={this.handleChange()}
          margin="normal"
        />
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Submit</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are You Sure?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Would you like to submit? Or is there something you'd like to change?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Go Back and Change
            </Button>
            <Button onClick={this.postFeedback} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );
  }
}

const mapReduxStateToProps = reduxState => reduxState

export default withRouter(connect(mapReduxStateToProps)(Comments));
