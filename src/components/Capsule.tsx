// Capsule.tsx

import React, { FC } from "react";
import FancyLink from "./FancyLink";

interface CapsuleItem {
  description: string;
  link: string;
  linkText: string;
}

interface CapsuleProps {
  title: string;
  items: Array<CapsuleItem>;
}

const Capsule: FC<CapsuleProps> = ({ title, items }) => {
  const generateLinks = () => {
    return items.map((element, index) => (
      <div key={index}>
        <p className="text-gray-700 mt-4">{element.description}</p>
        <div className="mt-2">
          <FancyLink url={element.link} text={element.linkText} />
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full px-4 mt-10">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {generateLinks()}
      </div>
    </div>
  );
};

export default Capsule;
