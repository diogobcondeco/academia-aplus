import React from "react";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Bubble from "./Bubble";

interface ItemsSectionProps {
  title: string;
  description: React.ReactNode; // can be string or JSX
  items: string[];
  bubbleBgColor?: string;
  bubbleTextColor?: string;
}

export default function ItemsSection({
  title,
  description,
  items,
  bubbleTextColor = "text-white",
}: ItemsSectionProps) {
  return (
    <Wrapper>
      <Title text={title} />
      <p className="text-lg md:text-xl text-gray-700 mb-6">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Bubble
            key={item}
            text={item}
            className={`${bubbleTextColor}`}
            style={{ backgroundColor: "#506642" }}
          />
        ))}
      </div>
    </Wrapper>
  );
}
