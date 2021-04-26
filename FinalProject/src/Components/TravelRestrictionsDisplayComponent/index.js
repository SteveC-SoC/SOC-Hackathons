import React from "react";
import css from "./travelRestrictDisplay.module.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,} from "@chakra-ui/react";

function TravelRestrictionsDisplay({ data, data2 }) {
  
  let facemaskData = data?.policyActions.length > 19 ? data.policyActions[17].policy_value_display_field : "no data";
  let workplaceDataCode =  data?.policyActions.length > 19 ? data.policyActions[1].policyvalue : "-"
  let workplaceData = data?.policyActions.length > 19 ? data.policyActions[1].policy_value_display_field : "no data"
  let countryCode = data?.stringencyData.country_code !== undefined ? data.stringencyData.country_code : "this selection"
  let travelDataCode = data?.policyActions.length > 19 ? data.policyActions[7].policyvalue : "-"
  let travelData = data?.policyActions.length > 19 ? data.policyActions[7].policy_value_display_field : "no data"
  let stringency = data?.stringencyData.stringency !== undefined ? data.stringencyData.stringency : 0
  let stringencyPast = data2?.stringencyData.stringency !== undefined ? data2.stringencyData.stringency : 0
  let stringencyChange = stringencyPast - stringency;
  let publicEvents = data?.policyActions.length > 19 ? data.policyActions[3].policy_value_display_field : "no data"
  let stringencyWording = ""
  let casesCum =  data?.stringencyData.confirmed !== undefined ? data.stringencyData.confirmed : 'no data'
  let casesCumPast =  data2?.stringencyData.confirmed !== undefined ? data2.stringencyData.confirmed : 'no data'
  let updateDate = data?.stringencyData.date_value !== undefined ? data.stringencyData.date_value : 'no data found, please check another date'

  function formatNumber(num = 100) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  
  while (data === null) {
  return (
    <div data-testid="travelrestrictions" className={css.container}>
      <h3>
        There is no data for {countryCode} on this date, <br />
        try an older date please...
      </h3>
    </div>
  );
  }
  
  stringencyChange === 0 ? stringencyWording="maintaining" : stringencyChange > 0 ? stringencyWording="tightening": stringencyWording="loosening"
  
  
  return (
    <div data-testid="travelrestrictions">
        <div>

          <div className={css.twoColumns}>
            <p>
              <div className={css.keyColumns}><h3 className={css.headerthree}>
                Border status</h3>
                <Popover>
                  <PopoverTrigger>
                    <button className={css.buttonone}>Key</button>
                  </PopoverTrigger>
                  <PopoverContent
                    bg="white"
                    border="1px solid black"
                    padding="15px"
                    width="50vh"
                    boxShadow="5px 5px #888888"
                    borderRadius="15px"
                    >
                    <PopoverArrow />
                    <PopoverCloseButton
                      bg="rgb(59, 182, 155)"
                      borderRadius="10px"
                      width="30px"
                      />
                    <PopoverHeader>
                      <h2>Border Key</h2>
                    </PopoverHeader>
                    <PopoverBody>
                      An explanation about what the border codes mean...
                      <p>
                        0 - No measures <br /> 1 - Screening <br />2 -
                        Quarantine arrivals from high-risk regions <br />3 - Ban
                        on arrivals from some regions <br />4 – Ban on all
                        regions or total border closure
                      </p>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                </div>
              {`(${travelDataCode}) - ${travelData}`}
            </p>
            <p>
              <h3 className={css.headerthree}>Covid cases:</h3>
              {formatNumber(casesCum)}
            </p>
          </div>
         
         
         
          <div className={css.twoColumns}>
          <p>
          <div className={css.keyColumns}>
            <h3 className={css.headerthree}>
              Workplace status</h3>
              <Popover >
                <PopoverTrigger>
                  <button className={css.buttontwo}>Key</button>
                </PopoverTrigger>
                <PopoverContent
                  bg="white"
                  border="1px solid black"
                  padding="20px"
                  width="50vh"
                  boxShadow="5px 5px #888888"
                  borderRadius="15px"
                  >
                  <PopoverArrow />
                  <PopoverCloseButton
                    bg="rgb(59, 182, 155)"
                    borderRadius="10px"
                    width="30px"
                    />
                  <PopoverHeader>
                    <h2>WorkPlace Status Key</h2>
                  </PopoverHeader>
                  <PopoverBody>
                    An explanation of the status codes for wrokplace
                    restrictions...
                    <p>
                      0 - No measures
                      <br /> 1 - recommend closing (or work from home) <br />2 -
                      require closing (or work from home) for some sectors or
                      categories of workers <br />3 - require closing (or work
                      from home) all-but-essential workplaces (e.g. grocery
                      stores, doctors) <br/>No data - blank
                    </p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

</div>
          
            {`(${workplaceDataCode}) - ${workplaceData}`}
          </p>

          <p>
                <h3 className={css.headerthree}>What about facemasks?</h3>
                {facemaskData}
              </p>
</div>
          <br />
          <div className={css.twoColumns}>
            <div>
            <div className={css.keyColumns}>
              <h3 className={css.headerthree}>
                Stringency index</h3>
                <Popover>
                  <PopoverTrigger>
                    <button className={css.buttonthree}>Key</button>
                  </PopoverTrigger>
                  <PopoverContent
                    bg="white"
                    border="1px solid black"
                    padding="20px"
                    width="50vh"
                    boxShadow="5px 5px #888888"
                    borderRadius="15px"
                    >
                    <PopoverArrow />
                    <PopoverCloseButton
                      bg="rgb(59, 182, 155)"
                      borderRadius="10px"
                      width="30px"
                    />
                    <PopoverHeader>
                      <h2>Stringency Index Explained</h2>
                    </PopoverHeader>
                    <PopoverBody>
                      Stringency Index: <br/> 100 = Strict <br/> 0 = Very Lax
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </div>
              <p>{stringency}</p>
              
            </div>
            <p>
            <h3 className={css.headerthree}>Public events</h3>
            {publicEvents}
          </p>
          </div>

          
        </div>

        

        <div className={css.blueBox}>
          <h4>
            Comparison to <u>One Month</u> ago:
          </h4>
          <div className={css.twoColumns}>
            <div><h4>Stringency Index</h4>
            <p> {stringencyPast} <br/>
            this is a change of...        
            {stringencyChange.toFixed(2) > 0 ? `+${stringencyChange.toFixed(2)}` : stringencyChange.toFixed(2)
          }</p></div> 
             <div>
            <h4>Covid cases</h4>
            {formatNumber(casesCumPast)}
          </div>
          </div>
          
          <br/>
          <p>{`This means that ${countryCode} is ${stringencyWording} their Covid restrictions internally`}</p>
       
        </div>
          <p style={{textAlign:"right"}}>Current data shown for {countryCode}. <br/> Last updated: {updateDate}</p>
      </div>
    );
  }


export default TravelRestrictionsDisplay;
