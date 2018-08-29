import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        marginRight: 10,
        marginLeft: 10,
    },
    textField: {
      margin: 20,
      marginRight: 10,
    },   
  });

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: ''
        }
    }
    handleSubmit(event) {
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)

        var url = `http://api.apixu.com/v1/current.json?key=ac91da03c2d944a3b1c70832182007&q=${this.state.city}`

        axios.get(url)
            .then(response => {
                let structure = {
                    name: response.data.location.name,
                    icon: response.data.current.condition.icon,
                    feelslike_c: response.data.current.feelslike_c,
                    text: response.data.current.condition.text,
                    comments: []
                };
                this.props.onSubmit(structure);
                this.setState({ city: '' });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    // <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                    id="search city"
                    label="Discover the weather around the world"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.city}
                    onChange={(event) => this.setState({ city: event.target.value })}
                    type="search"
                    fullWidth
                    margin="normal"
                   
                    helperText="Enter a city name to get the weather"
                    placeholder="City name"
                    className={classes.TextField}
                />
                {/*  defaultValue="foo" 
                <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter city"
                    required
                    value={this.state.city}
                    onChange={(event) => this.setState({ city: event.target.value })} /> */}
                {/* <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Go!</button>
                </span>                 */}
        </form >
        );
    }
}

export default withStyles(styles)(SearchForm);