import React from 'react'
import './widget.scss';

const widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>USERS</span>
            <span className='counter'>123456</span>
            <span className='link'>See all Users</span>
        </div>
        <div className="right">right</div>
    </div>
  )
}

export default widget