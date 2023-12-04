import React from 'react'
import './RightSide.css'
import Update from '../Update/Update'
import Customer from '../Customer/Customer'
const RightSide = () => {
  return (
    <div className='RightSide'>
    <div>
        <h1>Updates</h1>
        <Update/>
        </div>
        <div>
        <h2>Customer Review</h2>
        <Customer/>
        </div>
        
    </div>
  )
}

export default RightSide