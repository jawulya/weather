import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    state = {
        term: ''
        
    }
    
    onInputChange (event) {
        this.setState({term: event.target.value})        
    }
    onFormSubmit (event) {
        event.preventDefault();
        this.props.dispatch(fetchWeather(this.state.term));
        this.setState({term:''});
    }
    render() {
        return (
            <form 
            onSubmit={(event) => this.onFormSubmit(event)}
            className="input-group"
            >
                <input 
                    placeholder="enter city"
                    className="form-control"
                    value={this.state.term}
                    onChange = {(event) => this.onInputChange(event)}
                /> 
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>               
            </form>
        );
    }
}
export default connect(null)(SearchBar);