import React from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector("./scrollup");
   
     /* This code snippet is adding a class called "show-scroll" to the element with the class
     "scrollup" when the vertical scroll position of the window (window.scrollY) is greater than or
     equal to 560 pixels. */
      if (window.scrollY >= 560){scrollUp.classList.add("show-scroll");} 
      else {scrollUp.classList.remove("show-scroll");}
  });

  return (
      <a href="#" className="scrollup"><HiOutlineArrowSmUp className="scrollup__icon"/></a>
  );
}

export default ScrollUp;
