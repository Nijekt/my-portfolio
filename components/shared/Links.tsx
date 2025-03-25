import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { LuLinkedin } from "react-icons/lu";

const Links = () => {
  return (
    <div className="flex gap-8">
      <a
        href="https://www.linkedin.com/in/snizhko-nikita-639805252/"
        target="_blank"
      >
        <LuLinkedin size={17} color="#ceae7d" />
      </a>
      <a href="https://github.com/Nijekt" target="_blank">
        <FaGithub size={17} color="#ceae7d" />
      </a>

      <a href="https://www.codewars.com/users/Nijekt" target="_blank">
        <SiCodewars size={17} color="#ceae7d" />
      </a>
    </div>
  );
};

export default Links;
