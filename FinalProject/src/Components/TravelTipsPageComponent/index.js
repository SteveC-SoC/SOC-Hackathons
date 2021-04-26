import React from "react";
import css from "./travelTipsPage.module.css";
import logo from "./image.gif";

function TravelTipsPage() {
  return (
    <div className={css.container}>
      <div className={css.columnone}>
        <div className={css.title}>
          <h1>Travel Safely</h1>
          <h3>Check out our tips for travelling safe.</h3>
        </div>

        <div className={css.text}>
          <h3>Domestic Trip</h3>

          <ul>
            <li>Wash your hands often or use hand sanitizer. </li>
            <li>
              Self-monitor for COVID-19 symptoms; isolate and get tested if you
              develop symptoms.
            </li>
            <li>Do not travel if you have symptoms of COVID-19.</li>
            <li>
              Maintain a distance of six feet/ 2 metres or more from people
              outside your household.
            </li>
            <li>Continue to check on Travelsafe app for updates. </li>
          </ul>

          <h3>International Trip</h3>
          <ul>
            <li>Wear a mask over your nose and mouth.</li>
            <li>Avoid crowds where possible at airports, bus/train stations.</li>
            <li>Wash your hands often or use hand sanitizer.</li>
            <li>Do not travel if you have symptoms of COVID-19.</li>
            <li>
              Purchase travel insurance that includes cover for COVID-19.
            </li>
            <li>Continue to check on TravelSafe app for updates.</li>
            <li>
            Be prepared to follow local changing Covid-19 regulations, for
            example border closures, testing and quarantine requirements.
          </li>
          <li>
            Contact travel company or airline if there are any delays in changes to transport schedule.
          </li>
          </ul>
          <p>
            Remember that even if you have been vaccinated, you still need to
            wear a mask and social distance. Lower the risk of spreading
            coronavirus.
          </p>
        </div>
      </div>
      <div className={css.columntwo}>
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
}

export default TravelTipsPage;
