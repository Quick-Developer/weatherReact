import React, { Component } from 'react';
import CommentBox from './commentBox'

import Divider from '@material-ui/core/Divider';

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
                    comment={commentItem.comment} >
                    <Divider inset  /></CommentBox>)}
        </div>
    );


export default CommentListBox;