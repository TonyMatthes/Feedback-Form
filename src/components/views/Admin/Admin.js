import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';

class Admin extends Component {

  state = {
    feedback: []
  }

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      this.setState({
        feedback: response.data
      });
    }).catch(error => {
      console.log('ERROR:', error);
    });
  }

  handleDelete = () => id => {
    axios({
      method: 'DELETE',
      url: '/feedback',
      params: { id: id }
    }).then(() => {
      this.getFeedback();
    }).catch(error => {
      console.log('ERROR:', error);
    });
  };

  toggleFlag = () => id => {
    axios({
      method: 'PUT',
      url: '/feedback',
      params: { id: id }
    }).then(() => {
      this.getFeedback();
    }).catch(error => {
      console.log('ERROR:', error);
    });
  }

  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
      <div>
        <h2>All Feedback</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Feeling</TableCell>
                <TableCell>Understanding</TableCell>
                <TableCell>Supported</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Further Review</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.feedback.map(entry => (

                <TableRow key={entry.id}>

                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.feeling}</TableCell>
                  <TableCell>{entry.understanding}</TableCell>
                  <TableCell>{entry.support}</TableCell>
                  <TableCell>{entry.comments}</TableCell>
                  <TableCell>
                    <IconButton onClick={this.toggleFlag(entry.id)}>
                      {entry.flagged ? <FlagIcon color="secondary" /> : <FlagIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => this.handleDelete(entry.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>

                </TableRow>

              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Admin;