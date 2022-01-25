import React , { useState } from 'react';
import { Avatar } from '@material-ui/core';
import "./postSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../../context/stateProvider';
import db from '../../firebase';
import firebase from 'firebase';
const PostSender = () =>  {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const handelSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username : user.displayName,
            image : imgUrl
        })
    }
    return (
        <div className = "postSender">
            <div className = "postSender_top">
                <Avatar src = {user.photoURL}/>
                <form>
                    <input
                    value = {input}
                    onChange = {e => setInput(e.target.value)}
                    className = "postSender_input"
                    placeholder = {`What's on your mind`}/>
                    <input 
                    value = {imgUrl}
                    onChange = {e => setImgUrl(e.target.value)}
                     placeholder = "image url (optional)"/>
                    <button onClick= {handelSubmit} type = "submit">
                       post
                    </button>
                </form>
            </div>
            <div className = "postSender_bottom">
            <div className ="postSender_option" >
                <VideocamIcon style ={{color : 'red'}}/>
                <h3>live video</h3>
            </div> 
            <div className ="postSender_option" >
                <PhotoLibraryIcon style ={{color : 'green'}}/>
                <h3>photo / video</h3>
            </div> 
            <div className ="postSender_option" >
                <InsertEmoticonIcon style ={{color : 'orange'}}/>
                <h3>feeling  / activity </h3>
            </div> 
            </div> 
        </div>
    )
}

export default PostSender;
