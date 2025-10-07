import React from "react";
import Logo from "../assets/imgA/Logo.png";
import Profile from "../assets/imgA/Profile.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function MyPageA() {
  return (
    <>
      <div
        style={{ fonfamily: "Monomaniac One" }}
        className="w-full h-lvh flex flex-col items-center  bg-black"
      >
        {/* ส่วนที่ 1 เมนู */}
        <div className="w-10/12 mx-auto flex mt-20 items-center">
          <div className="flex-1 flex gap-8 text-2xl">
            <a href="#" className="text-white">
              Portfolio
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Get In Touch
            </a>
          </div>
          <div className="flex-1 justify-center flex">
            <img src={Logo} alt="Logo" className="w-20" />
          </div>
          <div className="flex-1 text-white flex gap-5 justify-end">
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        {/* ส่วนที่ 2 ข้อความ */}
        <div className="text-white mt-20 text-4xl flex flex-col items-center">
          <h1>Saranyaporn Leuangsa-ad</h1>
          <h1 className="text-[#01D5A2]">Freelance Web Developer</h1>
          <h1>Based In THAILAND</h1>
        </div>
        {/* ส่วนที่ 3  */}
        <div className="mt-10 border-2 border-[#01D5A2] rounded-full py-3 px-3">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </>
  );
}
