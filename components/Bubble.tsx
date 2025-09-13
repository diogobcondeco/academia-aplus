import React from "react";

interface BubbleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ text, className = "", style }) => (
  <div
    className={`
      inline-block text-center rounded-full px-4 py-2 font-bold text-lg md:text-xl
      shadow-md transition-transform transform hover:scale-105
      ${className}
    `}
    style={style}
  >
    {text}
  </div>
);

export default Bubble;
