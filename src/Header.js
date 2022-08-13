import React from 'react'

import './Header.css'

import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        });
    };

  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://cdn.vox-cdn.com/thumbor/KR-xy8mq5tcusdVMtHKQmkekOVk=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67798829/newgmaillogo.0.jpg" alt='Google' />
        </div>
        <div className='header__middle'>
            <SearchIcon />
            <input placeholder='Search mail' type="text" />
            <ArrowDropDownIcon className='header__inputCaret' />
        </div>
        <div className='header__right'>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar src={user?.photoUrl} onClick={signOut}/>
        </div>
    </div>
  )
}

export default Header