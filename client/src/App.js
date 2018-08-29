import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './searchForm';
import WeatherListBox from './weatherListBox'
import { throws } from 'assert';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
  },
  Container: { 
    display: 'flex',
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent: "space-around",
    //flex-flow
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    //bind this to functions    
    this.addWeather = this.addWeather.bind(this);
    this.removeWeather = this.removeWeather.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);

    //Declare local state
    this.state = {
      weatherList: [],
    };
  }


  addWeather(weatherData) {
    //  this.setState({ weatherList: [...this.state.weatherList, weatherData] })
    this.setState(prevState => ({
      weatherList: prevState
        .weatherList
        .concat(weatherData)
    }));
  };

  removeWeather(weatherId) {
    return ((e) => {
      let weatherArr = [...this.state.weatherList];
      weatherArr.splice(weatherId, 1);
      this.setState({ weatherList: weatherArr })
    });
    // axios.delete('/api/weather/' + weatherId)
    //   .then(Response => {
    //     let weatherArr = [...this.state.weatherList];
    //     let indexItem = weatherArr.findIndex(weather => weather._id === weatherId);
    //     weatherArr.splice(indexItem, 1);
    //     this.setState({ ...this.state, weatherList: weatherArr });
    //   });
  }

  addComment(weatherId, commentData) {
    //let index = this.state.weatherList.findIndex(item => item.name === city);
    let weatherArr = this.state.weatherList.concat();
    weatherArr[weatherId].comments.push(commentData);
    this.setState({ weatherList: weatherArr })
    //   axios.post('/api/weather/comments/add/', {
    //     id: weatherId,
    //     comment: commentData
    //   })
    //     .then(response => {
    //       let weatherArr = [...this.state.weatherList];
    //       let item = weatherArr.find(weather => weather._id === weatherId);
    //       item.comments.push(response.data);
    //       this.setState({ ...this.state, weatherList: weatherArr });
    //     });
  }

  removeComment(weatherId, commentId) {
    return ((e) => {
      let weatherArr = this.state.weatherList.slice(0);
      weatherArr[weatherId].comments.splice(commentId, 1);
      this.setState({ weatherList: weatherArr })
    });
    // axios.delete(`/api/weather/${weatherId}/comments/${commentId}/`)
    //   .then(response => {
    //     let weatherArr = [...this.state.weatherList];
    //     let item = weatherArr.find(weather => weather._id === weatherId);
    //     let findCommentIndex = item.comments.findIndex(comment => comment._id === commentId);
    //     item.comments.splice(findCommentIndex, 1);
    //     this.setState({ ...this.state, weatherList: weatherArr });
    //   })
  }

  // componentDidMount() {
  //   axios.get('/api/weathers')
  //     .then(res => {
  //       this.setState({ boxes: res.data })
  //     });
  // }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div >
          <h2>Weather app</h2>
          <SearchForm onSubmit={this.addWeather} />
        </div>
        <div className={classes.Container}>
          <WeatherListBox
            weatherList={this.state.weatherList}
            removeWeather={this.removeWeather}
            addComment={this.addComment}
            removeComment={this.removeComment} />
        </div>
      </div>
    );
  }
}

export default  withStyles(styles)(App);

//addWeather={this.addWeather} 
