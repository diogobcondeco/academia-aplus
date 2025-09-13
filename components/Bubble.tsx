import React from "react";

interface BubbleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ text, className = "", style }) => (
  <div
    className={`inline-block rounded-full px-4 md:px-4 py-2 md:py-2 m-1 shadow-md font-bold text-lg md:text-xl transition-transform ${className}`}
    style={style}
  >
    {text}
  </div>
);

export default Bubble;
