import React from "react";
import { CgArrowRightO } from "react-icons/cg";

function AboutCard() {
  return (
    <div className="container mx-auto md:px-4 px-2 text-white h-screen">
      <div className="flex flex-col items-center md:flex-row">
        <div className="text-left md:pl-10 md:w-4/6">
          <h2 className="text-center md:text-3xl text-xl font-bold mb-4 lg:mt-0 mt-6">
            Know <span className="text-bondi-400">Who</span> I'M
          </h2>
          <p className="md:text-xl text-sm pt-8 lg:ml-20">
            I'm <span className="text-bondi-400">Burak Polat</span> from{" "}
            <span className="text-bondi-400">Turkiye.</span>
            <br /> I've completed English Language and Literature at Karabuk
            university.
            <br />I worked as a teacher for four years and now I am
            transitioning to full-time front-end development. I'm an adaptable
            learner, passionate about crafting user interfaces that resonate.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="mt-4 lg:ml-20 pl-8 text-lg">
            <li className="flex items-center">
              <CgArrowRightO className="text-bondi-400 text-xl mr-2" />
              Travelling
            </li>
            <li className="flex items-center">
              <CgArrowRightO className="text-bondi-400 text-xl mr-2" />
              Playing games
            </li>
            <li className="flex items-center">
              <CgArrowRightO className="text-bondi-400 text-xl mr-2" />
              Playing guitar
            </li>
          </ul>
        </div>
        <div className="md:w-2/16 ">
          <img
            src="/img/About.png"
            alt=""
            className="w-full h-full rounded-full object-cover mx-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
