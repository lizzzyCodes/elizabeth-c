// Util Example
"use client";

import { TypeAnimation } from "react-type-animation";

interface typeAnimationProps {
  text?: string;
}

import GraphemeSplitter from "grapheme-splitter"; // npm i grapheme-splitter

const splitter = new GraphemeSplitter();

const TypeAnimationComponent: React.FC<typeAnimationProps> = ({ text }) => {
  return (
    <TypeAnimation
      splitter={(str) => splitter.splitGraphemes(str)}
      sequence={[text!, 2000]}
      style={{ fontSize: "2em" }}
      repeat={0}
      cursor={false}
    />
  );
};

export default TypeAnimationComponent;
