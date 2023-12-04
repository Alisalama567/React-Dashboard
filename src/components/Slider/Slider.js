import React, { useState } from 'react'
import './Slider.css'
import Logo from '../../imgs/logo.png'
import { SideData } from './Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {UilBars} from '@iconscout/react-unicons'
import {motion} from 'framer-motion'
const Slider = () => {
  const [seliected , setselected]=useState(0)
  const [expanded , setexpended]=useState(true)
  const sidebarvaraint={
    true :{
      left :'0'
    },
    false :{
      left :'-60%'
    }
  }
  return (
    <>
    <div className="bars" style={expanded ? {left: '60%'}:{left:'5%'}}
    onClick={(()=>setexpended(!expanded))}
    >
      <UilBars/>
    </div>
    <motion.div className='sidebars'
    variants={sidebarvaraint}
    animate={window.innerWidth<=768 ?`${expanded}`:""}
    >
        <div className="logo">
         <img src={Logo} alt="" srcset="" />
         <span>
            sh<span>o</span>pe
         </span>
        </div>

        <div className="menu">
          
            {SideData.map((item , index)=>{
              const {Icon , heading}=item
              return(
                <div className={seliected === index ?"meunitems active":"meunitems "} 
                key={index}
                onClick={()=>setselected(index)}
                >
                <Icon/>
                 <span>{heading}</span>
                  </div>
              )
            })}
            <div className="meunitems">
            <UilSignOutAlt/>

            </div>
          </div>
        </motion.div>
        </>
   
  )
}

export default Slider