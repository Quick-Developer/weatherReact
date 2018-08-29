import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            comment: "",
            open: false,
        };
    }

    handleClickOpen = () => {
        this.setState({ ...this.state, open: true });
    };

    handleClose = () => {
        this.setState({ ...this.state, open: false });
    };

    handleTextChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    // handleTextChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.props.weatherId, this.state);
        this.setState({ username: "", comment: "", open: false });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <Button onClick={this.handleClickOpen}>Open form dialog</Button> */}
                <Button variant="outlined" aria-label="add_comment" onClick={this.handleClickOpen} style={{ margin: 15 }}>
                    <i className="material-icons">
                        add_comment
                    </i>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add your comment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Share with us your feelings and your mind about the weather in this city.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            id="username"
                            label="Name"
                            value={this.state.username}
                            onChange={this.handleTextChange('username')}
                            margin="normal"
                            placeholder="Your nickname"
                        />

                        <TextField
                            required
                            id="comment"
                            label="Your comment"
                            multiline
                            rowsMax="4"
                            value={this.state.comment}
                            onChange={this.handleTextChange('comment')}

                            margin="normal"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleFormSubmit} color="primary">
                            Publish
            </Button>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }
}
export default CommentForm;



 // <form autoComplete="off" className="comment-form" onSubmit={this.handleFormSubmit}>
            //     <input  value={this.state.username} onChange={this.handleTextChange} type="text" name="username" placeholder="Your nickname" />
            //     <input value={this.state.comment} onChange={this.handleTextChange} type="text" name="comment" placeholder="Content of the message" />
            //     <button type="submit">Sumbit</button>
            // </form>










