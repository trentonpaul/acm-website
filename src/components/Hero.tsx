import React, { useState, useEffect } from "react";
import { logo } from "../assets";

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const offset = 100;

  const handleScroll = () => {
    const scrollPosition = window.scrollY - offset;
    const opacity = window.scrollY < offset ? 0 : scrollPosition / (500 - offset); // Adjust the division value based on your scroll range
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[700px] max-h-screen max-w bg-white pt-52 bg-fixed bg-bradley bg-cover bg-bottom overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, ${scrollOpacity}), rgba(255, 255, 255, ${scrollOpacity}))`,
          // backgroundImage: `linear-gradient(to bottom, transparent 0%, white 80%)`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 1))`,
          // backgroundImage: `linear-gradient(to bottom, transparent 0%, white 80%)`,
        }}
      ></div>
      <div className="max-w-[500px] lg:max-w-[980px] m-auto grid lg:grid-cols-2 px-4 lg:px-0 gap-4 lg:gap-0">
        <div className="flex flex-col justify-start gap-4 m-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Discover BU's vibrant <br />
            <span className="bg-gradient-to-b from-red-300 to-red-600 text-transparent bg-clip-text">
              code
            </span>
            {" + "}
            <span className="bg-gradient-to-b from-red-300 to-red-600 text-transparent bg-clip-text">
              design
            </span>
            {" + "}
            <span className="bg-gradient-to-b from-red-300 to-red-600 text-transparent bg-clip-text">
              transform
            </span>
            <br /> community.
          </h1>
        </div>
        <img
          className="h-[200px] md:h-[300px] m-auto lg:order-last order-first"
          src={logo}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
