import React, { Component } from 'react';

class CommentForm extends Component {
    constructor() {
        super();
        this.state = { username: "", comment: "" };
    }


    handleTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.props.weatherId, this.state);
        this.setState({ username: "", comment: "" });
    }
    render() {
        return (
            <form autoComplete="off" className="comment-form" onSubmit={this.handleFormSubmit}>
                <input value={this.state.username} onChange={this.handleTextChange} type="text" name="username" placeholder="Your nickname" />
                <input value={this.state.comment} onChange={this.handleTextChange} type="text" name="comment" placeholder="Content of the message" />
                <button type="submit">Sumbit</button>
            </form>
        );
    }
}

export default CommentForm;
