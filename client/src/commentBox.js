import React, { Component } from 'react';

const CommentBox = (props) => {
  return (
    <div className="comment-container row">
      <p className="col-xs-11">Written by:{props.username} - {props.comment}</p>
      <div className="commnet__icon">
        <button className="btn btn-default" onClick={props.removeComment} type="submit" style={{ width: 60 }}>
          <i className="fa fa-2x fa-trash" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default CommentBox;