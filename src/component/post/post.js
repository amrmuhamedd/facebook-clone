import React from 'react';
import "./post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

function post({profilePic , image, username , timestamp, message}) {
    return (
        <div className = "post">
            <div className = "post_top">
            <Avatar src = {profilePic} className = "post_avatar" />
            <div className = "post_topInfo">
                <h3>{username}</h3>
                <p> {new Date(timestamp?.toDate()).toString()} </p>
            </div>
            </div>
            <div className = "post_bottom">
                <p>{message}</p>
            </div>
            <div className = "post_image">
            <img src = {image} alt ="" />
            </div>
            <div className = "post_options">
                <div className ="post_option">
                    <ThumbUpIcon />
                    <p>like</p>
                </div>
                <div className ="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>comment</p>
                </div>
                <div className ="post_option">
                    <NearMeIcon />
                    <p>share</p>
                </div>
            </div>
        </div>
    )
}

export default post
