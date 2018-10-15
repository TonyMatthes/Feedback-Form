import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import NavButton from '../../structural-components/NavButton/NavButton';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
      alert('post successful!')
    }).catch(error => {
      console.log('Error in POST:', error);
    });
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>

        <TextField
          label="Any Comments?"
          multiline
          rowsMax="4"
          value={this.state.comments}
          onChange={this.handleChange()}
          margin="normal"
        />

        <NavButton name="Back" path="/3" />
        <div>
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
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => reduxState

export default connect(mapReduxStateToProps)(Comments);
