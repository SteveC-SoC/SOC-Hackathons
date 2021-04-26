import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../mapdatajson/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import { usePrevious } from "@chakra-ui/hooks";



function MyMap({handleCountryChange})  {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const previousCountry = usePrevious(selectedCountry);
  useEffect(()=>{
    if (previousCountry) {
      previousCountry.setStyle(countryStyle);
    }
  }, [selectedCountry]);



  let countryStyle = {
    fillColor: "green",
    fillOpacity: 0.5, //between 0-1
    color: "black",
    weight: 1, // border
    // dashArray: 5,
  };

  

  const onEachCountry = (country, layer) => {

    // const countryCode = country.properties.ISO_A3;

    const countryName = country.properties.ADMIN;

    // console.log(`${countryName},${countryCode}`);

    layer.bindPopup(countryName); 

    layer.on({
      click: (event) => {
      
        // console.log(event)
          event.target.setStyle({
            color: "blue",
            fillColor: "white",
            fillOpacity: 0.5,
          });
          setSelectedCountry(event.target)
          
          // function reset highlight:
          event.target.bringToFront();
          handleCountryChange(event);
      
          //we might want to add a function tu display som data or to take us to the country stats :)
        },
      });
  }


  return (
    <div className="box">
      
      <MapContainer
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "78vh" }}
        zoom={1}
        center={[20, 10]}
        mapPane={1}
      >
        <GeoJSON
          style={countryStyle}
          data={mapData.features}
          onEachFeature={onEachCountry}
          mapPane={1}
        />
      </MapContainer>
    </div>
  );

}

export default MyMap;
