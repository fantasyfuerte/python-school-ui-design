"use client";

import { Button } from "./ui/button";

function Scroll() {
  // different scroll to different screen sizes

  if (window.innerWidth < 768) {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }
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
