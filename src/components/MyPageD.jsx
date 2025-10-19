import React from "react";
import logo1 from "../assets/imgD/logo1.png";
import bread from "../assets/imgD/bread.png";
import bread1 from "../assets/imgD/bread1.png";
import bread2 from "../assets/imgD/bread2.png";
import bread3 from "../assets/imgD/bread3.png";
import bread4 from "../assets/imgD/bread4.png";
import bread5 from "../assets/imgD/bread5.png";
import { CiCircleInfo } from "react-icons/ci";
import banner from "../assets/imgD/banner.png";
import cake from "../assets/imgD/cake.png";
import cake1 from "../assets/imgD/cake1.png";
import cake2 from "../assets/imgD/cake2.png";
import cake3 from "../assets/imgD/cake3.png";
import cake4 from "../assets/imgD/cake4.png";
import cake5 from "../assets/imgD/cake5.png";
import banner1 from "../assets/imgD/banner1.png";
import pic1 from "../assets/imgD/pic1.png";
import pic2 from "../assets/imgD/pic2.png";
import pic3 from "../assets/imgD/pic3.png";
import bg_last from "../assets/imgD/bg_last.png";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import picture1 from "../assets/imgD/picture1.png";
import picture2 from "../assets/imgD/picture2.png";

const breads = [
  { id: 0, name: "Whole Grain Bread", price: "40 Baht", img: bread },
  { id: 1, name: "Whole Gaine Bread", price: "40 Bath", img: bread1 },
  { id: 2, name: "Whole Gaine Bread", price: "40 Bath", img: bread2 },
  { id: 3, name: "Whole Gaine Bread", price: "40 Bath", img: bread3 },
  { id: 4, name: "Whole Gaine Bread", price: "40 Bath", img: bread4 },
  { id: 5, name: "Whole Gaine Bread", price: "40 Bath", img: bread5 },
];
export default function MyPageD() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="bg-cover w-full h-[900px] bg-[url('/src/assets/imgD/image1.png')]">
          <div className="flex flex-row text-white">
            <img src={logo1} alt="Logo" className="w-1/7 ml-10" />
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex flex-1 ml-20 items-center text-2xl"
            >
              <a href="#" className="mr-10 text-[#E9BD8C]">
                Home
              </a>
              <a href="#" className="mr-10 hover:text-[#E9BD8C]">
                Blog
              </a>
              <a href="#" className="mr-10 hover:text-[#E9BD8C] ">
                Contact Us
              </a>
              <a href="#" className="mr-10 hover:text-[#E9BD8C] ">
                Services
              </a>
            </div>
          </div>
          <div
            style={{ fontFamily: "Inter" }}
            className="text-[#E9BD8C] text-2xl ml-25 mt-20"
          >
            Delicious Cafe
          </div>
          <div
            style={{ fontFamily: "Sansita Swashed" }}
            className="text-white text-7xl ml-25"
          >
            Sweet Treats, <br />
            Perfect Eats
          </div>
          <div
            style={{ fontFamily: "Inter" }}
            className="flex flex-row items-center"
          >
            <div className="text-white mt-30 ml-25 text-semibold text-xl bg-[#933C24] rounded-md py-4 px-6 w-1/9 text-center justify-center">
              Shop Now
            </div>
            <p className="text-[#E9BD8C] mt-30 ml-10 text-2xl">Learn More</p>
          </div>
        </div>
        <div
          style={{ fontFamily: "Sansita Swashed" }}
          className="text-black mt-20 mb-20 text-center text-6xl"
        >
          Top Product
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
          {breads.map((bread) => (
            <div
              key={bread.id}
              className="bg-[url('/src/assets/imgD/bg.png')] bg-cover rounded-md w-[300px] h-[350px] flex flex-col p-3"
            >
              <img
                src={bread.img}
                alt={bread.name}
                className="w-[210px] h-[200px] self-center"
              />
              <div className="flex flex-row text-white">
                <p className="text-xl text-semibold pl-5 mt-2">{bread.price}</p>
                <CiCircleInfo className="ml-30 mt-2 size-8" />
              </div>
              <div className="flex flex-row text-white">
                <p className="text-xl mt-5 pl-5">
                  {bread.name.split(" ").slice(0, -1).join(" ")} <br />
                  {bread.name.split(" ").slice(-1)}
                </p>
                <p className="bg-[#933C24] text-lg px-3 py-2 mt-5 mb-5 text-center ml-16 rounded-md">
                  Add
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-30 mb-30">
          <div
            className="bg-cover w-full h-[500px]"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <div
                style={{ fontFamily: "Sansita Swashed" }}
                className="text-[#933C24] text-6xl pt-20"
              >
                20% Off Your <br />
                First Order
              </div>
              <div>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-center text-[#5D5D5D] text-2xl pt-10 w-[300px]"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, necessitatibus.
                </p>
                <div
                  className="bg-[#933C24] text-semibold text-2xl py-3 mt-8 text-center 
                              text-white rounded-md w-[200px] ml-13"
                >
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            style={{ fontFamily: "Sansita Swashed" }}
            className="text-black text-6xl font-bold"
          >
            Explore More
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex flex-row font-semibold
                                                        justify-center items-center mt-20 text-[#5D5D5D] text-2xl"
          >
            <p className="relative mr-10 inline-block">
              Cake
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#933C24] rounded-full"></span>
            </p>
            <p className="mr-10">Muffins</p>
            <p className="mr-10">Croissant</p>
            <p className="mr-10">Bread</p>
            <p className="mr-10">Tart</p>
            <p className="mr-10">Favorite</p>
          </div>
        </div>
        <hr className="border border-[#D9D9D9] mt-3 w-[90%] mx-auto" />
      </div>
      <div className="mt-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center ml-15 mr-15">
          <img src={cake} alt="" />
          <img src={cake1} alt="" />
          <img src={cake2} alt="" />
          <img src={cake3} alt="" />
          <img src={cake4} alt="" />
          <img src={cake5} alt="" />
        </div>
      </div>
      <div className="mt-30 mb-30">
        <div
          className="bg-cover w-full h-[500px]"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div
              style={{ fontFamily: "Sansita Swashed" }}
              className="text-white text-6xl pt-22"
            >
              About us
            </div>
            <div>
              <p
                style={{ fontFamily: "Inter" }}
                className="text-center text-[#B9B9B9] text-xl pt-10 w-[300px]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                iusto culpa amet minus maiores quaerat.
              </p>
              <div
                className="bg-[#933C24] text-semibold text-2xl py-3 mt-10 
                                text-white rounded-l-lg w-[200px] ml-13 text-justify-center"
              >
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          style={{ fontFamily: "Sansita Swashed" }}
          className="text-black text-5xl font-semibold"
        >
          Featured Treats
        </div>
        <div
          style={{ fontFamily: "Inter" }}
          className="flex flex-row justify-center items-center gap-15 mt-30"
        >
          <div className="flex flex-col ">
            <img src={pic1} alt="Puff Pastry " />
            <div className="flex flex-row">
              <p className="text-2xl font-bold mt-2">Puff Pastry</p>
              <p className="text-2xl font-bold mt-2 ml-40">8 Bath</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={pic2} alt="Puff Pastry " />
            <div className="flex flex-row">
              <p className="text-2xl font-bold mt-2">Doughnuts</p>
              <p className="text-2xl font-bold mt-2 ml-40">8 Bath</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={pic3} alt="Puff Pastry " />
            <div className="flex flex-row">
              <p className="text-2xl font-bold mt-2">Brownies</p>
              <p className="text-2xl font-bold mt-2 ml-40">8 Bath</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-30">
        <div
          className="bg-cover w-full h-[700px]"
          style={{ backgroundImage: `url(${bg_last})` }}
        >
          <div className="flex flex-row items-center ml-10 gap-5">
            <img src={logo1} alt="Logo" className="w-[15%]" />
            <p
              style={{ fontFamily: "Inter" }}
              className="text-[#E9BD8D] text-2xl ml-[40%] mr-5"
            >
              Follow us
            </p>
            <FaFacebook className="text-4xl text-[#E9BD8D]" />
            <FaPinterest className="text-4xl text-[#E9BD8D]" />
            <IoLogoWhatsapp className="text-4xl text-[#E9BD8D]" />
            <RiInstagramFill className="text-4xl text-[#E9BD8D]" />
          </div>
          <hr className="border-[#E9BD8D] w-[85%] mx-auto" />
          <div
            style={{ fontFamily: "Inter" }}
            className="flex flex-row items-center ml-10 gap-5 mt-5"
          >
            <div
              style={{ fontFamily: "Poppins" }}
              className="mt-10 text-4xl font-bold flex flex-col flex-1 ml-15 text-[#E9BD8D]"
            >
              <h2 className="mb-5">About Us</h2>
              <div className="text-white text-2xl flex flex-col gap-2 leading-relaxed font-semibold">
                <span>(02) 807-4500</span>
                <span>info@sau.ac.th</span>
                <span>19/1 Phetkasem Road</span>
                <span>Nongkham Bangkok</span>
                <span>10160</span>
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-4xl font-bold flex flex-col flex-1 ml-15 text-[#E9BD8D]"
            >
              <h2 className="mb-5">Explore</h2>
              <div className="text-white text-2xl flex flex-col gap-2 leading-relaxed font-semibold">
                <span>Home</span>
                <span>Blog</span>
                <span>Contact Us</span>
                <span>Service</span>
              </div>
            </div>
            <div style={{fontFamily:"Poppins"}} className="flex flex-col flex-1 ml-15 text-[#E9BD8D]">
                <h2 className="mb-5 text-4xl font-bold ">Recent News</h2>
                <div className="flex flex-row gap-2 leading-relaxed">
                  <img src={picture1} alt="" className="w-[100px]"/>
                  <div className="flex flex-col">
                    <span className="text-base ml-2">June 14,2025</span>
                    <span className="text-xl text-white ml-2">Puff pastry bliss.</span>
                  </div>
                </div>
                <div div className="flex flex-row gap-2 leading-relaxed">
                  <img src={picture2} alt="" className="w-[100px] mt-5"/>
                  <div className="flex flex-col">
                    <span className="text-base ml-2 mt-5">June 14,2025</span>
                    <span className="text-xl text-white ml-2">Puff pastry bliss.</span>
                  </div>
                </div>
              </div>
          </div>
          <footer className="text-center text-[#737373] mt-15 text-2xl font-semibold">
            © 2025 Bake House. All rights reserved
          </footer>
        </div>
      </div>
    </>
  );
}
