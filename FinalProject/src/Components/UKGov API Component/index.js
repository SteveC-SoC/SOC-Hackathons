import React from 'react';
import css from './govApi.module.css';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import increase from "./increase.png";
import decrease from "./decrease.png";



function UkGovApiDisplay({data, data2}) {

  function formatNumber(num = "Loading...") {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

let actualRate =  data.newCasesByPublishDateRollingRate/7
let actualRatePrev =  data2.newCasesByPublishDateRollingRate/7
let covidChange = (actualRate - actualRatePrev).toFixed(2)
let cumulative = data.cumCasesByPublishDate
let updateDate = data.date
let areaName = data.areaName

let color = actualRate<=3 ? "blue": actualRate >6 ? "red" : "orange" 
let colorPrev = actualRatePrev<=3 ? "blue": actualRatePrev >6 ? "red" : "orange" 
let colorRate = (covidChange >= 0) ? "redRate" : "greenRate";
  
     return (
    <>
   
       <br/><h4>Cumulative Cases: {cumulative ? formatNumber(cumulative) : "No Data for this Area"}</h4> 
    

     <div className={css.stats}>
       
                  <h2>Covid Rates:</h2>

                  <Popover placement={'right'} trigger={'hover'} bg="grey" zIndex="1"
                  >
                  <PopoverTrigger>
                    <div className={css.keyButton} style={{fontWeight:"bolder"}}>?</div>
                  </PopoverTrigger>
                  <PopoverContent  zIndex="1" width="80%" bg="white" border="1px solid black" padding="20px"  boxShadow="5px 5px #888888" borderRadius="15px">
                    <PopoverArrow />
                    <PopoverCloseButton bg="rgb(59, 182, 155)" borderRadius="10px" width="30px"/>
                    <PopoverHeader><h2><u>Covid Rates Key</u></h2></PopoverHeader>
                    <PopoverBody bg={'white'} zIndex="1">
                      Covid Rate is the 7-day rolling average number of cases per 100,000 of the area's population.<br/> <br/>
                      <ul>
                        <li><span style={{color:"rgb(59, 112, 182)"}}>Low = 3 or Below</span></li> <br/>
                      <li><span style={{color:"#eea702"}}>Medium = 3.1 to 6 </span></li> <br/>
                     <li><span style={{color:" rgb(206, 95, 95)"}}> High = 6.1 or More</span></li> <br/>
                     <li>For the Rate Change we have: <span style={{color:" rgb(206, 95, 95)", fontWeight:'bold'}}> RISE</span> and <span style={{color:" rgb(66, 190, 103)", fontWeight:'bold'}}>FALL</span> in the respective Covid Rate</li> <br/> 
                      <div style={{fontWeight:'bold'}}><span style={{textDecoration:"underline"
                      }}>{areaName}</span>  currently has a Rate of...   <span style={{color:color}}>{(actualRate).toFixed(2)}</span> per 100,000 people</div>
                      </ul>
                      </PopoverBody>
                  </PopoverContent>
                </Popover>
              
      </div>

      
      <div className={css.stats}>
                
              <div className={css[colorRate]}>
                 <p style={{color:'white'}}> <h4 >Rate Change</h4> since last Month</p> 
                  <h5 >{`${covidChange}`} <img alt="changeSign" src={((covidChange >= 0) ? increase : decrease )}></img> </h5>
                  <p style={{fontSize:"medium", color:"white"}}>average daily cases per 100k</p>
               </div>

      


              <div className={css.rates} >
                  <div className={css[colorPrev]}>
                       <h4 style={{color:'white'}}>Last Month <br/> {actualRatePrev.toFixed(2)} <p style={{fontSize:"medium", color:"white"}}>average daily cases per 100k</p></h4>
                   </div>
     
                  <div className={css[color]}>
                         <h4 style={{color:'white'}}>Today <br/>{actualRate.toFixed(2)} <p style={{fontSize:"medium", color:"white"}}>average daily cases per 100k</p></h4>
                  </div>  
              </div>


        </div>

     <div className={css.update}>Data for {areaName}: Last Updated on: {updateDate}</div>
   </>
  );
}


export default UkGovApiDisplay;
