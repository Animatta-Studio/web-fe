import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className={`fixed mt-5 mr-2 bg-gray-300 rounded-full border-r-0 right-[8px] bottom-[20px] first-letter:rounded cursor-pointer ${isVisible ? 'flex' : 'hidden'} items-center justify-center h-10 text-4xl text-white w-10 z-[999]`} onClick={goToBtn}>
      <FaArrowUp className="h-5 w-5 animate-gototop text-[#0087E0]" />
    </div>
  );
};

export default GoToTop;
