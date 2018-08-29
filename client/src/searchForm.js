import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: ''
        }
    }
    handleSubmit(event){
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
    
        var url = `http://api.apixu.com/v1/current.json?key=ac91da03c2d944a3b1c70832182007&q=${this.state.city}`
    
        axios.get(url)
        .then(response => {
            let structure = {
                name: response.data.location.name,
                icon:  response.data.current.condition.icon,
                feelslike_c:  response.data.current.feelslike_c,
                text:  response.data.current.condition.text,
                comments: []
            };
            this.props.onSubmit(structure);
            this.setState({city: ''});
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }
    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter city"
                    required
                    value={this.state.city}
                    onChange={(event) => this.setState({city: event.target.value})}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Go!</button>
                </span>
            </div>
        </form>
        );
    }
}

export default SearchForm;