import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Typewriter = () => {
  const [element, setElement] = useState(0);
  const [text, setText] = useState("");
  const [animateClick, setAnimateClick] = useState(false);
  const [showTyper, setShowTyper] = useState(true);
  const [disappearTyper, setDisappearTyper] = useState(false);
  const elements = [
    "programming meetings to build projects and learn new technologies",
    "professional development workshops to help you transition to the workforce",
    "community building with exciting events like hackathons and classes",
  ];
  const speed = 50;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const index = useRef(0);

  const [ref, inView] = useInView();

  const typeWriter = () => {
    if (timeoutRef.current || element > 2) {
      return;
    }

    const currentElement = elements[element];

    if (inView && index.current <= currentElement.length) {
      setText(currentElement.substring(0, index.current));
      index.current++;

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        typeWriter();
      }, speed);
    } else {
      setAnimateClick(true);
      setTimeout(() => {
        setAnimateClick(false);
        index.current = 0;
        setElement((prevElement) => prevElement + 1);

        if (element <= 2 && timeoutRef.current) {
          typeWriter();
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (element > 2) {
      setShowTyper(false);
      setTimeout(() => {
        setDisappearTyper(true);
      }, 500);
    }
  }, [element]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && element <= 2) {
      typeWriter();
    }
  }, [inView, element]);

  return (
    <div className={`typewriter-container ${inView ? "visible" : ""}`} ref={ref}>
      <div
        id="typer"
        className={`flex gap-2 my-4 ${showTyper === false ? "exit-animation" : ""} ${
          disappearTyper === true ? "exit-hidden" : ""
        }`}
      >
        <div className="flex md:items-center bg-slate-700 rounded-2xl flex-1 min-h-[110px] md: min-h-[50px] md:h-[50px]">
          <div className="px-4 py-4 text-white text-left text-sm font-mono">
            <span className="text-violet-300">offer</span>(
            <span className="text-teal-300">"{text}"</span>)
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              animateClick ? "click-animation" : ""
            }`}
          >
            Enter
          </div>
        </div>
      </div>
      <ul className="list-disc text-left pl-5 md:pl-20 mt-2 text-lg">
        <li className={element <= 0 ? "hidden" : ""}>{elements[0]}.</li>
        <li className={element <= 1 ? "hidden" : ""}>{elements[1]}.</li>
        <li className={element <= 2 ? "hidden" : ""}>{elements[2]}.</li>
      </ul>
    </div>
  );
};

export default Typewriter;
