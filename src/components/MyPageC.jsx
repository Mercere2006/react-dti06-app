import React from "react";
import { LuDot } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image3 from "../assets/imgC/image3.png";
import image2 from "../assets/imgC/image2.png";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

export default function MyPageC() {
  return (
    <>
      <div className="min-h-screen bg-[#000C58]">
        <div className="h-20 bg-[#060135] flex flex-row justify-center items-center">
          <div
            style={{ fontfamily: "bebas neue" }}
            className="text-white ml-15 text-[22px] font-[600]"
          >
            SARANYAPORN LEUANGSA-AD
          </div>
          <div
            style={{ fontFamily: "inter" }}
            className="flex flex-1 justify-end mr-15"
          >
            <div className="text-white gap-5 flex text-lg">
              <a href="#">Work</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            style={{ fontFamily: "bebas neue" }}
            className="text-white mt-15 w-[600px] text-8xl ml-30"
          >
            HI, I AM <br />
            SARANYAPORN L.
            <div style={{ fontFamily: "prompt" }} className="text-lg font-thin">
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย <br />
              ที่มีความหลงใหลในการสร้างเว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </div>
            <div className="flex">
              <div
                style={{ fontFamily: "prompt" }}
                className="bg-[#7A99E9] text-black rounded-4xl mt-10 my-auto"
              >
                <div className="flex text-xs items-center justify-center font-bold ml-5">
                  CONTACT ME
                  <LuDot className="size-10" />
                </div>
              </div>
              <div className="mt-11 ml-5">
                <FaLinkedinIn className="text-6xl bg-[#222222] text-[#7A99E9] p-2 rounded-3xl size-8.5" />
              </div>
              <div className="mt-11 ml-5">
                <FaGithub className="text-6xl bg-[#222222] text-[#7A99E9] p-2 rounded-3xl size-8.5" />
              </div>
            </div>
          </div>
          {/* รูป */}
          <div>
            <img src={image3} alt="" className="w-[400px] ml-15 mt-15" />
          </div>
        </div>
        <hr className="border border-[#484848] mt-15 w-[90%] mx-auto" />
        <div className="flex text-white">
          <div
            style={{ fontFamily: "bebas neue" }}
            className="mt-15 text-8xl ml-30 w-[600px]"
          >
            ABOUT ME
          </div>
          <div
            style={{ fontFamily: "prompt" }}
            className="mt-15 ml-15 text-3xl"
          >
            ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงาน <br />
            อยู่ในกรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้น <br />
            ในการ ทำงานมีพื้นฐานการศึกษาด้าน <br />
            วิศวกรรมซอฟต์แวร์
            <div className="mt-10 text-base font-thin">
              ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์{" "}
              <br />
              มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ{" "}
              <br />
              ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ <br />
              เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล
              ถ่ายภาพ และเล่นเกม <br />
              FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
            </div>
            <div className="flex">
              <div className="bg-[#7A99E9] text-black rounded-4xl mt-10 my-auto">
                <div className="flex text-xs items-center justify-center font-bold ml-5">
                  DOWLOAD RESUME
                  <LuDot className="size-10" />
                </div>
              </div>
              <div className="mt-11 ml-5">
                <FaLinkedinIn className="text-6xl bg-[#222222] text-[#7A99E9] p-2 rounded-3xl size-8.5" />
              </div>
              <div className="mt-11 ml-5">
                <FaGithub className="text-6xl bg-[#222222] text-[#7A99E9] p-2 rounded-3xl size-8.5" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={image2} alt="image2" className="mt-5 ml-30" />
        </div>
        <hr className="border border-[#484848] mt-20 w-[90%] mx-auto" />
        <div className="flex text-white">
          <div
            style={{ fontFamily: "bebas neue" }}
            className="mt-15 text-7xl ml-30 w-[600px]"
          >
            MY CAPABILITIES
          </div>
          <div className="flex flex-col">
            <div
              style={{ fontFamily: "Monrope" }}
              className="mt-15 font-thin ml-15 text-[#C7C7C7]"
            >
              ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์
              แบล็กเอนต์ <br />
              การออกแบบ UX/UI ฐานข้อมูล
            </div>
            <div className="grid grid-cols-4 text-center gap-4 mt-10 ml-15">
              {[
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "FLUTTER",
                "DART",
                "IoT",
                "REACT",
                "DATABASE",
              ].map((skill) => (
                <div
                  key={skill}
                  className="border-2 border-[#484848] rounded-3xl px-8 py-3 text-white text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="border border-[#484848] mt-20 w-[90%] mx-auto" />
        <div className="flex text-white">
          <div
            style={{ fontFamily: "bebas neue" }}
            className="mt-15 text-7xl ml-30 w-[600px]"
          >
            MY EXPERIENCE
          </div>
          <div
            style={{ fontFamily: "Monrope" }}
            className="flex flex-col text-medium"
          >
            <div className="mt-15 ml-15">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Freelance Developer</h3>
                <span className="text-base text-[#C7C7C7]">
                  Nov 2023 ― Present
                </span>
              </div>
            </div>
            <p className="mt-5 text-base ml-15 font-thin text-[#C7C7C7]">
              พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้
              React.js ทำงานร่วมกับทีม <br />
              ออกแบบ UX/UI
              เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจปรับปรุงความเร็วในการโหลด{" "}
              <br />
              เว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายใน{" "}
              <br />
              องค์กร
            </p>
            <div className="mt-5 ml-15">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Front-End Intern</h3>
                <span className="text-base text-[#C7C7C7]">
                  Sep 2023 ― Nov 2023
                </span>
              </div>
            </div>
            <p className="mt-5 text-base ml-15 font-thin text-[#C7C7C7]">
              พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript <br />
              ช่วยปรับปรุงการเข้าถึง (Accessibility)
              ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG <br />
              ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
            </p>
          </div>
        </div>
        <hr className="border border-[#484848] mt-20 w-[90%] mx-auto" />
        <div className="flex text-white">
          <div
            style={{ fontFamily: "bebas neue" }}
            className="mt-15 text-7xl ml-30 w-[600px]"
          >
            LET'S CONNECT
            <p
              style={{ fontFamily: "Monrope" }}
              className="mt-5 text-lg font-thin text-[#C7C7C7]"
            >
              Say hello {" "}
              <span className="text-white font-normal">
                S6752410013@sau.ac.th
              </span>{" "}
              <br />
              For more info, here’s my {" "}
              <span className="text-white font-normal">resume</span> <br />
            </p>
            <div className="flex gap-5 mt-10 text-2xl text-[#7A99E9]">
              <FaLinkedinIn />
              <FaGithub />
              <FaXTwitter />
              <BsInstagram />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "Monrope" }} className="mt-15 ml-15 text-[#C7C7C7]">
              <div>Name</div>
                <input className="mt-2 w-[550px] border-none h-[50px] p-4 rounded-md bg-[#060135] focus:outline-none" />
              <div className="mt-5">Email</div>
                <input className="mt-2 w-[550px] border-none h-[50px] p-4 rounded-md bg-[#060135] focus:outline-none" />
              <div className="mt-5">Subject</div>
                <input className="mt-2 w-[550px] border-none h-[50px] p-4 rounded-md bg-[#060135] focus:outline-none" />
              <div className="mt-5">Message</div>
                <textarea className="mt-2 w-[550px] border-none h-[150px] p-4 align-top text-start rounded-md bg-[#060135] focus:outline- resize-none" />
                <div className="bg-[#7A99E9] text-black rounded-full mt-5 py-2 text-center text-xs font-semibold w-25"> SUBMIT</div>
            </div>
          </div>
        </div>
        <hr className="border border-[#484848] mt-10 w-[90%] mx-auto" />
        <footer className="text-[#C7C7C7] mt-10 pb-10 text-center">
          © 2025 Created by SAU-Dev-Team
        </footer>
      </div>
    </>
  );
}
