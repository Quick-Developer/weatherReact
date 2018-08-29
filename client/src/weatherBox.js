import React from 'react';
import CommentForm from './commentForm';
import CommentListBox from './commentListBox';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 400,
    },
});

const WeatherBox = ({ id, name, icon, feelslikeC, text, comments, addComment, removeWeather, removeComment, classes }) =>
    (
        <div>
            <Paper className={classes.root} elevation={1}>


                <Typography variant="headline" component="h3">

                    <img className="weather__icon" src={icon} alt={text} className="media-object" style={{ width: 60 }} />

                </Typography>
                <Typography component="p">
                    <h4 >{name}</h4>
                    <p>{text}- {feelslikeC}&nbsp;° &nbsp;| C</p>
                </Typography>

                <div className="media-body">

                </div>

                <button className="btn btn-default" onClick={removeWeather} type="submit" style={{ width: 60 }}>
                    <i className="fa fa-2x fa-trash" aria-hidden="true" />
                </button>

                <div className="weather__box">
                    <CommentForm weatherId={id} addComment={addComment} />
                </div>
                <div className="weather__box">
                    <CommentListBox removeComment={removeComment} weatherId={id} comments={comments} />
                </div>
            </Paper>
        </div>
    );

    WeatherBox.propTypes = {
        classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(WeatherBox);





        


