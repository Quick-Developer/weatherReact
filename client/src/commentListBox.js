import React, { Component } from 'react';
import CommentBox from './commentBox'

const CommentListBox = ({ weatherId, comments, removeComment }) =>
    (
        <div>
            {comments.map((commentItem, index) =>
                <CommentBox
                    key={index}
                    removeComment={removeComment(weatherId, index)}
                    weatherId={weatherId}
                    commentId={index}
                    username={commentItem.username}
                    comment={commentItem.comment} />)}
        </div>
    );


export default CommentListBox;