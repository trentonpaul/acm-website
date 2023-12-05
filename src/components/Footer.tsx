import React, { useState, useEffect } from "react";
import { acmWhite, discordWhite } from "../assets";

const Footer = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const offset = 600;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const invertedOpacity = 1 - (scrollPosition - (totalHeight - offset)) / offset;

    // Ensure opacity is between 0 and 1
    const opacity = Math.min(1, Math.max(0, invertedOpacity));

    setScrollOpacity(opacity);
    console.log(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[700px] max-h-screen max-w pt-52 bg-fixed bg-neutral-900 bg-cover bg-bottom overflow-hidden">
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
          background: `linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 8%)`,
          // backgroundImage: `linear-gradient(to bottom, transparent 0%, white 80%)`,
        }}
      ></div>
      <div className="max-w-[500px] lg:max-w-[980px] m-auto px-4 lg:px-0 gap-4 lg:gap-0">
        <div className="flex flex-col items-center justify-center gap-4 m-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            What are you waiting for? <br />
            <span className="bg-gradient-to-b from-red-300 to-red-600 text-transparent bg-clip-text">
              Join Today!
            </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center mt-10">
          <div className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] flex items-center justify-center cursor-pointer z-10">
            <a className="" href="https://discord.gg/BqjT2cgH">
              <img
                className="w-[100px] md:w-[150px] transform hover:scale-110 transition-transform duration-500 ease-in-out"
                src={discordWhite}
                alt="Discord"
              />
            </a>
          </div>
          <div className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] flex items-center justify-center cursor-pointer z-20">
            <a href="https://www.acm.org/">
              <img
                className="w-[100px] md:w-[150px] transform hover:scale-110 transition-transform duration-500 ease-in-out"
                src={acmWhite}
                alt="ACM"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
