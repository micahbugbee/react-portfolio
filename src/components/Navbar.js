import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2f3035] text-gray-300">
      <div>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience">
            Experience
          </Link>
        </li>
      </ul>

      {/* Hamburger menu */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#2f3035] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl text-[#9ea7c4]">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#9ea7c4]">
          <Link
            onClick={handleClick}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#9ea7c4]">
          <Link
            onClick={handleClick}
            to="/experience"
          >
            Experience
          </Link>
        </li>
      </ul>

      {/* Social icons */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/micah-bugbee/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/micahbugbee"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:micahbugbee@hotmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e7813e]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
