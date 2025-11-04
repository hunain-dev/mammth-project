import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Biggertext = ({ text, classname, children }) => {
  const textRef = useRef(null);

  // Prefer explicit text prop, else children
  const raw = text ?? children;

  useEffect(() => {
    if (!textRef.current) return;

    const spans = textRef.current.querySelectorAll("span");
    if (!spans.length) return;

    // Reset before animating
    gsap.killTweensOf(spans);
    gsap.set(spans, { y: 120, opacity: 0 });

    // Animate letters in sequence
    gsap.to(spans, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
    });
  }, [raw]);

  // Convert content into spans (handle <br /> safely)
  const renderContent = (content) => {
    if (typeof content === "string") {
      return content.split("").map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>;
        return <span key={i}>{ch}</span>;
      });
    }

    if (Array.isArray(content)) {
      return content.map((child, i) => renderContent(child));
    }

    if (React.isValidElement(content)) {
      if (content.type === "br") {
        return <br key={Math.random()} />;
      }
      return renderContent(content.props.children);
    }

    return null;
  };

  return (
    <h1
      ref={textRef}
      className={`ObviouslyDemo uppercase font-semibold text-[#120011]  ${classname ?? ""}`}
    >
      {renderContent(raw)}
    </h1>
  );
};

export default Biggertext;
