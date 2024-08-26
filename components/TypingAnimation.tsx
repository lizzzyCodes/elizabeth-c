import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const TypingAnimation = () => {
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
        <TypeAnimation
          sequence={["hi my name is liz && welcome to my portfolio!"]}
          repeat={0}
          cursor={true}
          speed={1}
        />
      )}
      {!hasAnimated && (
        <div className="text-[#ED6DD3] text-[32px] lg:text-[55px] p-10 text-center font-press-start uppercase mb-4">
          <h1> hi im liz && welcome to my portfolio!</h1>
        </div>
      )}
    </div>
  );
};

export default TypingAnimation;
