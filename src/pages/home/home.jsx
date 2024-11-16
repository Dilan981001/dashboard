import React from 'react'
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';


const home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget/>
            <Widget/>
            <Widget/>
            <Widget/>
          </div>
        </div>
    </div>
  )
}

export default home