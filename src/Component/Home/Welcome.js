import React from "react";
import { ReactTyped } from "react-typed";

function Welcome() {
  return (
    <div className="pt-20 pl-8 h-screen md:flex justify-between">
      <section>
        <h1 className="md:text-5xl text-3xl font-bold text-white">
          I'M BURAK POLAT
        </h1>
        <div className="text-bondi-400 font-semibold text-2xl pt-4">
          <ReactTyped
            strings={["Front-end Developer"]}
            typeSpeed={40}
            backSpeed={70}
            loop
          />
        </div>
      </section>
      <div className="md:max-w-80 md:max-h-80 max-w-60 max-h-60 pt-20 md:pt-0">
        <img src="/img/home.png" alt="Home-img" />
      </div>
    </div>
  );
}

export default Welcome;
