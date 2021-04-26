import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../Navbar";
import HomePage from "../HomePage";
import UKPage from '../UKMainPageComponent';
import WorldPage from '../WorldMainPageComponent';
import WorldTrackerPage from '../WorldTrackerPage';
import TravelTipsPage from '../TravelTipsPageComponent';
import Loadingimage from "./loadingImage.gif"

//Lazy loading



function App() {
return(
    <Suspense
      fallback={
        <div><img src={Loadingimage} alt="loading" /></div>}>

      <div className="App">
        <link rel="icon" href="./loadingImage.gif" />
        <Router>
          <nav className="nav-bar"></nav>
          <div>
            <Navbar />
            <Switch>
              <Route path="/UKPage">
                <UKPage />
              </Route>
              <Route path="/WorldPage">
                <WorldPage />
              </Route>
              <Route path="/WorldTracker">
                <WorldTrackerPage />
              </Route>
              <Route path="/TravelTipsPage">
                <TravelTipsPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Suspense>
)
}

export default App;
