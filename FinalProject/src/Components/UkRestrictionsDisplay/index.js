import React, {useState, useEffect} from 'react';
import css from './ukRestDisplay.module.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"
import loading from "./loadingImage.gif"



function UKRestrictionsDisplay() {
  const [fetchedData, setFetchedData] = useState(null);
  const [click, setClick] = useState(true);
  const [fetchLength, setFetchLength] = useState(0)

  const url = process.env.REACT_APP_URL
 



  useEffect(() => {
    const webScrapeFetch =async () => {
    
        let res = await fetch(url);
        let data = await res.json();
        setFetchedData(data);
        setFetchLength(data.length-1)
    }
    webScrapeFetch()
  }, [click, url])



function handleClick(){setClick(!click)}

while (!fetchedData) {
  return (<div style={{textAlign:'center'}}><img src={loading}/>
  <p>information is flying over to us now and will be displayed shortly</p><button onClick={handleClick}>Click Me if nothing is happening</button></div>)
} 
// (fetchedData){
  return (

    <div className = {css.customDiv}>
      <h2 className={css.heading} style={{textAlign:'center'}}>Gov Restrictions for Travel</h2>

      <Accordion colorScheme={"facebook"} allowToggle zIndex="300">
        <AccordionItem className={css.item} zIndex="3">
          <h2 class={css.customHeading}>
            <AccordionButton zIndex="3" borderRadius="15px">
              <Box flex="1" textAlign="left" zIndex="3">
                Travelling within England:{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white">

            <p>{fetchedData[fetchLength].withinEng.replace(/&#44;/g, ",")}</p>
            
             {/* <p>You should minimise travel where possible. This means you should avoid making unnecessary trips and combine trips where possible. You should not stay away from home overnight for a holiday.</p> */}
          </AccordionPanel>
        </AccordionItem>


        <AccordionItem className={css.item}>
          <h2 class={css.customHeading}>
            <AccordionButton borderRadius="15px">
              <Box flex="1" textAlign="left">
                Travelling within the UK:{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white">
            <h3>from England...</h3>
            <p> {fetchedData[fetchLength].toUkFromEngland.replace(/&#44;/g, ",")}</p>
            {/* <p>You may leave England to travel to other parts of the UK, the Republic of Ireland, Jersey, Guernsey or the Isle of Man. However, there may be restrictions in place in the area you intend to travel to which prevent you from travelling. You may only be able to travel for certain reasons, such as work. You should check the restrictions in place at your intended destination before making arrangements to travel.</p> */}
         
            <br />
            <h3>to England...</h3>
            <p>{fetchedData[fetchLength].toEnglandFromUK.replace(/&#44;/g, ",")}</p>
            {/* <p>You can enter England from other parts of the UK, the Republic of Ireland, Jersey, Guernsey and the Isle of Man. This is sometimes known as the Common Travel Area.  However, there may be restrictions in place in the area you intend to travel from which prevent you from travelling. For example, if you are in Wales, Scotland or Northern Ireland, there may be a requirement to stay at home or “Stay Local” where you live, which means you cannot travel to England.</p> */}
            
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={css.item}>
          <h2 class={css.customHeading}>
            <AccordionButton borderRadius="15px">
              <Box flex="1" textAlign="left">
                International Travel:{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton >
          </h2>
          <AccordionPanel pb={4} bg="white">
            <h3>from England...</h3>{" "}
            <p>{fetchedData[fetchLength].intFromEng.replace(/&#44;/g, ",")}</p>
            {/* <p>You can only travel internationally from England where you have a reasonable excuse to leave the UK, such as work. International holidays are not permitted.</p> */}
            <br />
            <h3>to England...</h3>{" "}
            <p>{fetchedData[fetchLength].toEngFromInt.replace(/&#44;/g, ",")}</p>
            {/* <p>All those planning to travel to England should follow the guidance on entering the UK. Before travelling to the UK, you must complete a passenger locator form and have proof of a negative COVID-19 test, unless you are exempt.</p> */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <p style={{textAlign:'right', fontSize:'small', color:'black'}}>This information was last updated on: {fetchedData[fetchLength].date}</p>
    </div>
  );
}



export default UKRestrictionsDisplay;
