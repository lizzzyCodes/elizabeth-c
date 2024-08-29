import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

interface AnimationProps {
  text: string;
  defaultText: string;
}

const TypingAnimation = ({ text, defaultText }: AnimationProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setHasAnimated(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);
  return (
    <div>
      {hasAnimated && (
        <TypeAnimation sequence={[text]} repeat={0} cursor={true} speed={1} />
      )}
      {!hasAnimated && (
        <div className="text-[#ED6DD3] text-[32px] lg:text-[55px] pt-10 pl-10 pr-10 pb-4 text-center font-press-start uppercase mb-4">
          <h1>{ defaultText }</h1>
        </div>
      )}
    </div>
  );
};

export default TypingAnimation;
