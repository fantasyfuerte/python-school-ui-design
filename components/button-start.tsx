"use client";

import { Button } from "./ui/button";

function Scroll() {
  const scrollTo = window.innerWidth < 768 ? 400 : 300;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}

function ButtonStart() {
  return (
    <Button
      onClick={Scroll}
      className="mt-8 bg-cta1 hover:bg-cta1/90 text-backgroundgrey font-bold px-8 py-6 text-lg"
    >
      Start Coding Now
    </Button>
  );
}

export default ButtonStart;
