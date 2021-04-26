import React, { useState, lazy, Suspense } from "react";
import css from "./WorldPage.module.css";
import TravelRestrictionsDisplay from "../TravelRestrictionsDisplayComponent";
import FlightWidget from "../Flight Widget Component";
import useFetch from "../../CustomHooks/useFetch";
import MyMap from "../World Map Component/index.js";
import CountrySelect from "../CountrySelect/CountrySelect";
import Alert from "../Alert";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RedCountriesModal from "../Modal Component/index";
import { Button } from "react-bootstrap";


const LazyTravelRestrictionsDisplay = lazy(() =>
  import("../TravelRestrictionsDisplayComponent")
);
const LazyFlightWidget = lazy(() => import("../Flight Widget Component"));
const LazyRedCountriesModal = lazy(() => import("../Modal Component/index"));
const LazyCountrySelect = lazy(()=>import("../CountrySelect/CountrySelect"));

function WorldPage() {
  const [modalShow, setModalShow] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  let DATE = new Date();
  DATE.setUTCDate(DATE.getUTCDate() - 9);
  // console.log(DATE)

  const [date, setDate] = useState(DATE.toISOString().substr(0, 10));

  // const [capital, setCapital] = useState("London");
  let API_WORLD_STATS = `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions`;

  let DATE2 = new Date();
  DATE2.setMonth(DATE2.getMonth() - 1); //minus mmonth from secodn instance of new date()
  // console.log(DATE2.toISOString().substr(0, 10)); //convert back date to readable string

  const [countryCode, setCountryCode] = useState("GBR");

  let countryObj = useFetch(`${API_WORLD_STATS}/${countryCode}/${date}`, [
    countryCode,
    date,
  ]);

  // handle change on search bar
  function handleChange(value) {
    setCountryCode(value === null ? "GBR" : value.ISO3);
  }

  // handle map country change
  function handleCountryChange(value) {
    setCountryCode(
      value === null ? "GBR" : value.sourceTarget.feature.properties.ISO_A3
    );
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  //lazy loading of the Map

  return (
    <>
      <Alert />

      <div className={css.container}>
        {/* <SearchBar />
    <TravelRestrictionsDisplay /> */}

        <div className={css.columnone}>
          <h1 className={css.title}>World Wide Stats & Travel Information</h1>

          <div className={css.twoColumns}>
            <Suspense
              fallback={
                <div>
                  Loading...
                </div>
              }
            >
              <LazyCountrySelect handleChange={handleChange} />
            </Suspense>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Change Date"
                type="date"
                defaultValue={DATE.toISOString().substr(0, 10)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChangeCapture={handleDate}
              />
            </form>
          </div>
          <div className={css.TravelRestrictionsDisplay}>
            <Suspense
              fallback={
                <div>
                  Loading...
                </div>
              }
            >
              <LazyTravelRestrictionsDisplay data={countryObj} />
            </Suspense>
          </div>
        </div>

        <div className={css.columntwo}>
          <div className={css.redcountries}>
            <div className={css.redone}>
              <h3>Important Notice</h3>
              <p className={css.TLS}>
                On <span>9th April 2021</span> the government has set out a{" "}
                <span>Traffic Light System</span>, which categorises countries
                based on travel risk and the current restrictions required for
                travel.
              </p>
            </div>
            <div className={css.redtwo}>
              <Button
                className={css.redcountriesbutton}
                variant="primary"
                size="sm"
                onClick={() => setModalShow(true)}
              >
                See 'red-list' countries
              </Button>
            </div>
          </div>
          <Suspense
            fallback={
              <div>
                Loading...
              </div>
            }
          >
            <LazyRedCountriesModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Suspense>
          <div className={css.map}>
            <MyMap handleCountryChange={handleCountryChange} />
          </div>

          <div className={css.flightWidget}>
            <Suspense
              fallback={
                <div>
                  Loading...
                </div>
              }
            >
              <LazyFlightWidget />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorldPage;
