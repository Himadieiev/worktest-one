import React, { useState, useEffect } from "react";
import css from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${css.scrollToTop} ${isVisible ? css.visible : ""}`}
      onClick={scrollToTop}
    >
      Up
    </button>
  );
};

export default ScrollToTopButton;
