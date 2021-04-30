import React, {useState} from 'react';
import HomePage from '../HomePage';
import Reggae from '../GenrePage/Reggae';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pop from '../GenrePage/Pop';
import HipHop from '../GenrePage/HipHop';
import ClassicRock from '../GenrePage/ClassicRock/index';
import { useAuth0 } from "@auth0/auth0-react";


function BodyApp({user}){


 const { userOne, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
    
    return (
        isAuthenticated && (
    <div>

    <Router>
     <div>
       <nav >
         <ul class="nav">
           <li>
             <Link class="item" to="/">HomePage</Link>
           </li>
           <li>
             <Link class="item" to="Reggae">Reggae</Link>
           </li>
           <li>
             <Link class="item" to="ClassicRock">Classic Rock</Link>
           </li>
           <li>
             <Link class="item" to="Pop">Pop</Link>
           </li>
           <li>
             <Link class="item" to="HipHop">HipHop</Link>
           </li>
         </ul>
       </nav>

       <Switch>
         <Route path="/Reggae">
           <Reggae />
         </Route>
         <Route path="/ClassicRock">
           <ClassicRock />
         </Route>
         <Route path="/Pop">
           <Pop />
         </Route>
         <Route path="/HipHop">
           <HipHop />
         </Route>
         <Route path="/">
           <HomePage user={user} />
         </Route>
       </Switch>
     </div>
   </Router>
   </div>
)
    )
}

export default BodyApp;