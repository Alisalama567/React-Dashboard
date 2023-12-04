import React from 'react'
import './Update.css'
import {UpdatesData} from '../Slider/Data/Data'
const Update = () => {
  return (
    <div className='Update'>
        {UpdatesData.map((update)=>{
            const {img , name , noti ,time} =update;
            return(
               <div className="update">
                <img src={img} alt="" srcset="" />
                <div className="noti">
                    <div className='title'>
                        <span>{name }</span>
                        <span>{noti}</span>
                    </div>
                    <span>{time}</span>
                </div>
               </div>
            )
        })}
    </div>
  )
}

export default Update