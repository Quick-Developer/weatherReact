import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './searchForm';
import WeatherListBox from './weatherListBox'
import { throws } from 'assert';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {

   
    paddingTop: 50,
    paddingRight: 30,
    paddingBottom: 40,
    paddingLeft: 30,
    
  },
  Container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "flex-start",
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
        <Paper className={classes.root} elevation={1}>
          <Typography variant="display2"  gutterBottom>
            Weather app
          </Typography>
          <SearchForm onSubmit={this.addWeather} />
        </Paper>

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

export default withStyles(styles)(App);

//addWeather={this.addWeather}






{/* <Typography component="p">
    <h4 >{name}</h4>
    <p>{text}- {feelslikeC}&nbsp;° &nbsp;| C</p>
</Typography> */}
