import React, { useState } from 'react'
import './Card.css'
import {motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from 'react-apexcharts'
import {UilTimes} from '@iconscout/react-unicons'
const Card = (props) => {
    const [Expanded , setexpected]=useState(false)
  return (
    <AnimateSharedLayout>
        {
            Expanded ? 
            <ExpandedCared params={props} setexpected={()=>setexpected(false)} />:
            <CompactedCard params={props} setexpected={()=>setexpected(true)} />
        }
    </AnimateSharedLayout>
  )
    
}
function CompactedCard({params ,setexpected}) {
    const Png =params.png
    return(
        <motion.div 
        className="compactedcard" 
        onClick={(()=>setexpected(true))}
        style={{
          background:  params.color.backGround,
          boxShadow : params.color.boxShadow

        }}
        layoutId='expandableCard'
        >
        
            <div className="radiabar" >
                <CircularProgressbar 
                    value={params.barValue}
                    text={`${params.barValue}%`}
                />
                <span>{params.title}</span>
            </div>
            <div className="details">
                <Png/>
                <span>$ {params.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}
function ExpandedCared ({params , setexpected}){

    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return(
       <motion.div 
       className="ExpandedCard"
       style={{
        background : params.color.backGround,
        boxShadow : params.color.boxShadow,
       }}
       layoutId='expandableCard'

       >
       <div  style={{alignSelf:"flex-end" ,cursor : 'pointer' , color :'white'}} >
        <UilTimes onClick={setexpected} 
        />
       </div>
      
       <span>{params.title}</span>
       <div className="charcontainer">
        <Chart  series={params.series} type='area' options={data.options}/>
       </div>
       <span>Last 24 Hours</span>
       
       </motion.div>
       
    )
}
export default Card