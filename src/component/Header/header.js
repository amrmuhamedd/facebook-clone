import React from 'react'
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import {useStateValue} from '../../context/stateProvider';
const Header = () =>  {
    const [{user} , dispatch] = useStateValue();
    return (
        <div className = "header">

            <div className = "header_left">
            <img src="https://img.icons8.com/fluent/144/000000/facebook-new.png" alt = ""/>
                <div className = "header_input">
                    <SearchIcon />
                    <input type = "text" placeholder ="search facebook"/>
                </div>
            </div>

            <div className = "header_middle">
                <div className = "header_option active">
                    <HomeIcon fontSize = "large" />
                </div>
                <div className = "header_option">
                    <FlagIcon fontSize = "large" />
                </div>
                <div className = "header_option">
                    <SubscriptionsIcon fontSize = "large" />
                </div>
                <div className = "header_option">
                    <StorefrontIcon fontSize = "large" />
                </div>
                <div className = "header_option">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div>
            </div>

            <div className = "header_right">
                <div className = "header_info">
                    <Avatar src = {user.photoURL}/>
                    <h4> {user.displayName} </h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default Header
