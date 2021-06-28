import React, { useState, useEffect } from "react";

import "./vertical-scroll-progress-bar.css";

export default function VerticalScrollProgressBar() {
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
    <div className="vertical-scroll-progress-bar_wrapper">
      <div
        className="vertical-scroll-progress-bar_fill"
        style={{ height: `${scroll}%` }}
      ></div>
    </div>
  );
}
