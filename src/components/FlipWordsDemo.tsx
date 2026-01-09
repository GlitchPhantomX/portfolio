import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Full Stack Developer", "AI Developer", "Backend Developer", "Web Developer"];

  return (
    <span className="ml-2 text-[#915EFF] font-semibold">
      <FlipWords words={words} />
    </span>
  );
}
