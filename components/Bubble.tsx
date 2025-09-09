import React from "react";

interface BubbleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ text, className = "", style }) => (
  <div
    className={`inline-block rounded-full px-4 py-2 m-2 shadow-md font-semibold text-base transition-transform hover:scale-105 ${className}`}
    style={style}
  >
    {text}
  </div>
);

export default Bubble;
