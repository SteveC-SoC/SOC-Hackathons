import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Columns from "react-columns";
import SearchBar from "../SearchComponent";
import { css } from "@chakra-ui/styled-system";

function WwTracker() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountry, setSearchCountry] = useState(""); // May need to move to App level

  function formatNumber(num = "Loading...") {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
        // console.log(responseArr[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  //this corrects the search bar
  //regardless of case
  const filterCountry = results.filter((item) => {
    return (
      searchCountry &&
      item.country.toLowerCase().startsWith(searchCountry.toLowerCase())
    );
  });

  // reuseable component
  const countries = filterCountry.map((data, i) => {
    return (
      <Card
        // changed from i to data.country, because the key would not change when the list is re-rendered because of filter,i it can use old children
        key={data.country}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases: {formatNumber(data.cases)}</Card.Text>
          <Card.Text>Deaths: {formatNumber(data.deaths)}</Card.Text>
          <Card.Text>Recovered: {formatNumber(data.recovered)}</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={data.countryInfo.flag} />
      </Card>
    );
  });

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  return (
    <div className={css.main}>
      <br />
      <br />
      <br />
      <br />
      <CardDeck>
        <Card
          text="black"
          className="text-center"
          style={{ margin: "10px", backgroundColor: "#ffadad" }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>{formatNumber(latest.cases)}</Card.Text>
          </Card.Body>
        </Card>

        <Card
          text="black"
          className="text-center"
          style={{ margin: "10px", backgroundColor: "#ffc2a9" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{formatNumber(latest.deaths)}</Card.Text>
          </Card.Body>
         </Card>

        <Card
          text="dark"
          className="text-center"
          style={{ margin: "10px", backgroundColor: "#ffd6a5" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{formatNumber(latest.recovered)}</Card.Text>
          </Card.Body>
        </Card>
        
          <Card 
            text="dark"
            className="text-center"
            style={{ margin: "10px", backgroundColor: "#fdffb6" }}
          >
            <Card.Body>
              <Card.Title>Last updated</Card.Title>
              <Card.Text>
                <small>{lastUpdated}</small>
              </Card.Text>
            </Card.Body>
          </Card>
        
      </CardDeck>

      <SearchBar
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        placeholderText="Search for a country to see COVID-19 stats..."
      />

      <Columns queries={queries}>{countries}</Columns>
    </div>
  );
}
export default WwTracker;
