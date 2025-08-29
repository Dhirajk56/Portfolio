import React from "react";
const Logo = "/assets/images/2.png";
const resume = "/Dhiraj_Kumar_web_developer.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center ">
        <img className="h-20" src={Logo} alt="" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={resume}
          target="_blank"
          className="text-white rounded text-sm font-semibold p-1 flex  cursor-pointer"
        >
          My Resume <FaDownload className="text-lg mx-1" />
        </a>
        <a href="https://www.linkedin.com/in/dhiraj-kumar-b78051251/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Dhirajk56">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/dhirajkumar56/">
          <SiLeetcode />
        </a>
        <a href="#">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
