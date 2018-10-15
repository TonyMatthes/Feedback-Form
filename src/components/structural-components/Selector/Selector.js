import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl'
import { FormLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Selector extends Component {
    state={
        rating: ''
    }
    handleChange =()=> event => {
        this.setState({
            rating: event.target.value
        });
        this.props.dispatch({ type: this.props.dispatcher, payload: this.state.rating });

    }
    render() {
        return (
            <FormControl>
                <FormLabel component="legend">Rate:</FormLabel>
                <RadioGroup
                    aria-label="Rating"
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleChange('rating')}
                >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                </RadioGroup>
            </FormControl>
        );
    }
}

const mapReduxStateToProps= reduxState => reduxState

export default connect (mapReduxStateToProps) (Selector);
