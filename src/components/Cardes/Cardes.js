import React from 'react'
import './Cardes.css'
import { cardsData } from '../Slider/Data/Data'
import Card from '../Card/Card'
const Cardes = () => {
  return (
    <div className='cardes'>
        {cardsData.map((card , index)=>{
            const {title ,color , barValue ,value , png , series}=card;
        return(
          <div className="parentContainer" key={index}>
            <Card
            title ={title}
            color={color}
            barValue ={barValue}
            value ={value}
            png={png}
            series={series}

             />
          </div>
        )
        })}
    </div>
  )
}

export default Cardes