import React, { FC } from "react";

interface FancyLinkProps {
  url: string;
  text: string;
}

const FancyLink: FC<FancyLinkProps> = ({ url, text }) => {
  return (
    <a
      href={url}
      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
      {text}
    </a>
  );
};

export default FancyLink;
