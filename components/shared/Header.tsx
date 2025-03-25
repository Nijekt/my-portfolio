import React from "react";
import Nav from "./Nav";
import Links from "./Links";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className="h-24 flex items-center fixed top-0 w-full text-white z-10 translate-all duration-300 bg-header-background">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Logo />
        <div className="md:block hidden">
          <Nav />
        </div>
        <div className="md:block hidden">
          <Links />
        </div>

        <div className="block md:hidden ">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
