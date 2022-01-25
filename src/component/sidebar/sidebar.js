import React from 'react'
import SidbarRow from './sidebarRow/sidebarRow';
import './sidebar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../../context/stateProvider';
const Sidebar = () =>  {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className = "sidebar">
            <SidbarRow src = {user.photoURL} title = {user.displayName}/>
            <SidbarRow Icon = {LocalHospitalIcon} title = "COVID-19 information Center"/>
            <SidbarRow Icon = {EmojiFlagsIcon} title = "pages"/>
            <SidbarRow Icon = {PeopleIcon} title = "friends"/>
            <SidbarRow Icon = {ChatIcon} title = "messenger"/>
            <SidbarRow Icon = {StorefrontIcon} title = "marketplace"/>
            <SidbarRow Icon = {VideoLibraryIcon} title = "videos"/>
            <SidbarRow Icon = {ExpandMoreIcon} title = "marketplace"/>
        </div>
    )
}

export default Sidebar
