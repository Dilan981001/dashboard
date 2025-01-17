import React from 'react'
import './neww.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const neww = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
        <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'><DriveFolderUploadOutlinedIcon/></label>
                <input type='file' id='file' style={{display:"none" }}/>
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type='text' placeholder='John Doe'/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type='email' placeholder='johndoe@gmail.com'/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type='text' placeholder='+94 11 1111 123'/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type='password' />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type='text' placeholder='No.1 Colombo7'/>
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type='text' placeholder='Sri Lanka'/>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default neww