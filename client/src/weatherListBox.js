import React, { Component } from 'react';
import WeatherBox from './weatherBox';
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

// const WeatherBox = ({ id, name, icon, feelslikeC, text, comments, addComment, removeWeather, removeComment, classes }) =>
//     (


const WeatherListBox = (props) => {
  const WeatherBoxes = props
    .weatherList
    .map((weatherItem, index) =>
      <WeatherBox
        key={index}
        id={index}
        name={weatherItem.name}
        icon={weatherItem.icon}
        feelslikeC={weatherItem.feelslike_c}
        text={weatherItem.text}
        comments={weatherItem.comments}
        addComment={props.addComment}
        removeWeather={props.removeWeather(index)}
        removeComment={props.removeComment}
      />);
  return (
    <div className={props.classes.Container}>
      {WeatherBoxes}
    </div>
  );

}

export default withStyles(styles)(WeatherListBox);