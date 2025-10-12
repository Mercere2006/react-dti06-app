import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Photo from "../assets/imgB/Photo.png";
import { SiClickup } from "react-icons/si";
import { FaDropbox } from "react-icons/fa";
import { SiPaychex } from "react-icons/si";
import { SiElastic } from "react-icons/si";
import { FaStripe } from "react-icons/fa";

export default function MyPageB() {
  return (
    <>
      <div className="w-full h-lvh bg-black">
        {/* ส่วนที่ 1 เมนู */}
        <div className="w-10/12 mx-auto flex items-center h-20 rounded-b-2xl bg-[#1B1B1B] px-25">
          <div
            style={{ fontFamily: "IBM Plex Mono" }}
            className="flex-1 flex gap-25 text-sm text-[#9C9C9C]"
          >
            <a href="#">Home</a>
            <a href="#">Case Studies</a>
            <a href="#">Testimonials</a>
            <a href="#">Recent work</a>
            <a href="#">Get In Touch</a>
          </div>
          <div className="text-[#9C9C9C] text-lg flex gap-8 justify-end">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaBehance />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        {/* ส่วนที่ 2ข้อความ */}
        <div className="flex">
          <div className="ml-60 mt-30 w-[1000px]">
            <div>
              <h1
                style={{ fontFamily: "Raleway" }}
                className="text-white text-4xl font-bold"
              >
                Saranyaporn Leuangsa-ad
              </h1>
            </div>
            <div style={{ fontFamily: "IBM Plex Mono" }}>
              <div className="text-[#9C9C9C] mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Dicta amet magnam ipsam voluptatibus facere deleniti rem <br />
                dolorem praesentium alias consequuntur, sunt est inventore,{" "}
                <br />
                totam deserunt repellendus eius vero. Quos, at.
              </div>
              <div
                className="mt-10 rounded-lg py-5 px-4 w-90 bg-[#3F8E00] border-[#62BA1B] border-2 
                            shadow-[#3F8E0080] text-white text-lg font-bold text-center flex justify-center"
              >
                Let's get started <FaAngleRight className="ml-3 mt-1" />
              </div>
            </div>
          </div>
          <div className="mr-60 mt-20">
            <img src={Photo} alt="Photo" className="w-120" />
          </div>
        </div>
        {/* ส่วนที่ 3 */}
        <div className="ml-60 mt-15">
          <div style={{ fontFamily: "IBM Plex Mono" }} className="text-white">
            Worked with
          </div>
          <div className="flex gap-10 mt-5 flex-1">
            <div className="rounded-lg border-2 border-[#1B1B1B] px-8 py-4 w-45 h-15 flex justify-center items-center">
              <SiClickup className="text-2xl text-[#3e3e3e] mx-auto my-auto"/>
              <span className="text-xl font-bold text-[#3e3e3e]">ClickUp</span>
            </div>
            <div className="rounded-lg border-2 border-[#1B1B1B] px-8 py-4 w-45 h-15 flex justify-center items-center">
              <FaDropbox className="text-2xl text-[#3e3e3e] mx-auto my-auto"/>
              <span className="text-xl font-bold  text-[#3e3e3e]">Dropbox</span>
            </div>
            <div className="rounded-lg border-2 border-[#1B1B1B] px-8 py-4 w-45 h-15 flex justify-center items-center">
                <SiPaychex className="text-[90px] text-[#3e3e3e]"/>
            </div>
            <div className="rounded-lg border-2 border-[#1B1B1B] px-8 py-4 w-45 h-15 flex justify-center items-center">
              <SiElastic className="text-2xl text-[#3e3e3e]"/>
              <span className="text-xl text-[#3e3e3e] ml-1">elastic</span>
            </div>
            <div className="rounded-lg border-2 border-[#1B1B1B] px-8 py-4 w-45 h-15 flex justify-center items-center">
              <FaStripe className="text-[60px] text-[#3e3e3e]"/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
