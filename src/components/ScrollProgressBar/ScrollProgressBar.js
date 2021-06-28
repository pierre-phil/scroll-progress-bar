import React, { useState, useEffect } from "react";

import "./scroll-progress-bar.css";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (windowScroll / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-bar_wrapper">
      <div
        className="scroll-progress-bar_fill"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}
