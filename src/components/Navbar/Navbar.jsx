import React from "react";
import "./Navbar.scss";


const Navbar = () => {
  const scrollToAbout=() => {
    const aboutUs=document.querySelector("#About");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToHome=() => {
    const aboutUs=document.querySelector("#HomeSection");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToEvents=() => {
    const aboutUs=document.querySelector("#Event");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToTeam=() => {
    const aboutUs=document.querySelector("#Teams");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToContact=() => {
    const aboutUs=document.querySelector("#Contact");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  return (
    <div className="navbar">
      {
      <>
      <div onClick={scrollToHome}>Home</div>
      <div onClick={scrollToAbout}>About us</div>
      <div onClick={scrollToTeam}>Team</div>
      <div onClick={scrollToEvents}>Events</div>
      <div onClick={scrollToContact}>Contact</div>
      </>
      }
    </div>
  );
};

export default Navbar;
