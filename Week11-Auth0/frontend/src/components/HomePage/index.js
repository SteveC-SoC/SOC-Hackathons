import React from 'react';
import Button from '../Button';
import { useAuth0 } from "@auth0/auth0-react";

function HomePage({user = "test"}){
    const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
    
    return (
        isAuthenticated && (
        <div>
        {/* //greeting user */}
        <p>{`Hello ${user}`}</p>
        <p>What would you like to listen to today?</p>

        {/* //genre buttons */}
        <Button />
        <Button />
        <Button />
        <Button />
        </div>
    )
    )
}

export default HomePage;