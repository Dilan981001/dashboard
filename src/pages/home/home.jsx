import React from 'react'
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/featured';
import Chart from '../../components/chart/chart';
import Table from '../../components/table/Table';


const home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earnings"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default home