import React from 'react'
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon/>
            English
          </div>
          <div className="item">
            <FullscreenExitIcon/>
          </div>
          <div className="item">
            <NotificationsIcon/>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon/>
          </div>
          <div className="item">
            <ListIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar