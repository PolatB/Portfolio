import React from "react";
import Welcome from "./Welcome";
import Introduction from "./Introduction";

function Home() {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <Welcome />
      <Introduction />
    </div>
  );
}

export default Home;
