import React, { lazy, Suspense, beforeLoad } from "react";
import Button from "../ButtonComponent/index";
import css from "./HomePage.module.css";
import { useHistory } from "react-router-dom";


const LazyButton = lazy(()=>import("../ButtonComponent/index"));



function HomePage() {
  const history = useHistory();

  return (
    <div className={css.main}>
      <div className={css.slogan}>
        <h1 style={{ textAlign: "center" }}>
          We are your guide to travel safety.
        </h1>
        <div className={css.slogantext}>
          <h3>
            Sometimes you just need something simple, to help make the informed
            decision.
          </h3>
          <span>
            If you are thinking of visiting a place in the UK or abroad,
          </span>
          <span>
            <b> TravelSafe</b> is your one stop app for all your latest travel
            safety concerns.
          </span>

          <br />
          <span>
            {" "}
            We are here to give you peace of mind for your travels, be safe in
            the knowledge <b>TravelSafe</b> has got you. Go ahead and get up to
            date information on Covid rates & travel restrictions.
          </span>
        </div>
      </div>

      <div className={css.buttons}>
        <Suspense fallback={<div>Loading..</div>}>
          <LazyButton
            size="medium"
            text="Traveling Within UK"
            onClick={() => history.push("../UKPage")}
          />

          <LazyButton
            size="medium"
            text="Traveling Abroad"
            onClick={() => history.push("../WorldPage")}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default HomePage;
