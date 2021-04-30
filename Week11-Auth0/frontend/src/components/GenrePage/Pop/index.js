import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Pop() {
  const { userOne, isAuthenticated, isLoading } = useAuth0();
  const [popMusic, setPopMusic] = useState("");

  useEffect(() => {
    FetchPop();
  }, []);

  async function FetchPop() {
    let res = await fetch("http://localhost:5000/MusicApp");
    let data = await res.json();
    console.log(data[0].youTubeLink);
    setPopMusic(data[0].youTubeLink);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Pop</h1>
        <video url={popMusic} />
      </div>
    )
  );
}

export default Pop;
