import React from "react";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        Liz is a Web Developer from New York
      </h1>
    </div>
  );
}

export default Home;
