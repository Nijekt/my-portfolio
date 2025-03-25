import { Lobster } from "next/font/google";
import React from "react";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  return (
    <span className={`${lobster.className} cursor-pointer text-2xl`}>
      Nikita Snizhko
    </span>
  );
};

export default Logo;
