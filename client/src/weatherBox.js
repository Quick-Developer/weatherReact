import React from 'react';
import CommentForm from './commentForm';
import CommentListBox from './commentListBox';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {

        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: 250,
        maxWidth: 500,
        borderRadius: '0px 30px 10px 10px',
        marginLeft: 10,
        marginRight: 10,
        borderStyle: 'inset',
        borderWidth: 3,
        borderColor: 'LightGray'
    },
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const WeatherBox = ({ id, name, icon, feelslikeC, text, comments, addComment, removeWeather, removeComment, classes }) =>
    (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="title" gutterBottom align="center" >
                    {name}
                </Typography>
                <Divider />
                <Typography variant="headline" component="h3">
                    <img className="weather__icon" src={icon} alt={text} />
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    {text} - {feelslikeC}&nbsp;° &nbsp;| C
                </Typography>

                <Button color="secondary" variant="outlined"  aria-label="Delete" className={classes.button} onClick={removeWeather}>
                    <i className="material-icons">
                        delete_outline
                    </i>
                </Button>
                <Divider />
                <CommentForm weatherId={id} addComment={addComment} style={{ padding:5 }}/>                
                <div>
                    <CommentListBox removeComment={removeComment} weatherId={id} comments={comments} />
                </div>
            </Paper>
        </div>
    );

WeatherBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherBox);








