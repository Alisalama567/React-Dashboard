import React from 'react'
import './MainDash.css'
import Cardes from '../Cardes/Cardes'
import Table from '../Table/Table'
const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cardes/>
        {/* <h1>Recent Order</h1> */}
        <Table/>
    </div>
  )
}

export default MainDash