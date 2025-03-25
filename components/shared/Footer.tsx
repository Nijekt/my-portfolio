import React from "react";
import Links from "./Links";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-header-background py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <Links />
          <Logo />
          <a
            className="font-normal text-[#ceae7d]"
            href="mailto: nktsnz111@gmail.com"
          >
            nktsnz111@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
