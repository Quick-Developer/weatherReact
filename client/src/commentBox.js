import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const CommentBox = (props) => {
  const { classes } = props;
  const user = "Written by: " + props.username;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <ListItemText primary={user} secondary={props.comment} />
          <Button color="secondary" variant="outlined" aria-label="Delete" className={classes.button} onClick={props.removeComment}>
            <i className="material-icons">
              delete_outline
                    </i>
          </Button>
        
        </ListItem>
      </List>

    </div>
  );
}





export default withStyles(styles)(CommentBox);




{/* <p className="col-xs-11">Written by:{props.username} - {props.comment}</p>
  <div className="commnet__icon">
    <button className="btn btn-default" onClick={props.removeComment} type="submit" style={{ width: 60 }}>
      <i className="fa fa-2x fa-trash" aria-hidden="true" />
    </button>
  </div> */}


{/* <div >
  <List>
    <ListItem>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    </ListItem>
    <li>
      <Divider inset />
    </li>
    <ListItem>
      <Avatar>
        <WorkIcon />
      </Avatar>
      <ListItemText primary="Work" secondary="Jan 7, 2014" />
    </ListItem>
    <Divider inset component="li" />
    <ListItem>
      <Avatar>
        <BeachAccessIcon />
      </Avatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  </List>
</div>
  );
} */}




