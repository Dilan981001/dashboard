import React from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Dilan</span></div>
            <hr/>
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonIcon/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon/>
                    <span>Delivery</span>
                </li>
                <li>
                    <InsertChartIcon/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon/>
                    <span>Notifications</span>
                </li>
                <li>
                    <SettingsSystemDaydreamIcon/>
                    <span>System Health</span>
                </li>
                <li>
                    <LoginIcon/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon/>
                    <span>Settings</span>
                </li>
                <li>
                    <AccountCircleIcon/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar