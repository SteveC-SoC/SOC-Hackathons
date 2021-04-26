import React, { lazy, Suspense } from "react";
import WwTracker from "../WorldWideCovidTracker";
import css from "./worldTracker.module.css";

const LazyWwTracker = lazy(() => import("../WorldWideCovidTracker"));

function WorldTrackerPage() {
  return (
    <div className={css.page}>
      <div className={css.title}>
        <div>
          {" "}
          <h1>World Tracker</h1>{" "}
        </div>
        <div>
          <span>Find the latest Covid-19 statistics</span>
        </div>
      </div>
      <div className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyWwTracker />
        </Suspense>
      </div>
    </div>
  );
}

export default WorldTrackerPage;
