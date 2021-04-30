import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function ClassicRock() {
  const { userOne, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Classic Rock</h1>
      </div>
    )
  );
}

export default ClassicRock;
