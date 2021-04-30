
import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Reggae(){

 const { userOne, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
    
    return (
        isAuthenticated && (
        <div>
            <h1>Reggae</h1>
            
        </div>
    )
    );
}

export default Reggae;