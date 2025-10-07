import React from 'react'
import img1 from '../assets/imgH/img1.png'
import img2 from '../assets/imgH/img2.png'
import img3 from '../assets/imgH/img3.png'
import img4 from '../assets/imgH/img4.png'
import { Link } from 'react-router-dom'
import MyPageA from './MyPageA'


export default function Home() {
  return (
    <>
    <div style={{fonfamily:'Roboto Mono'}} className='w-full h-1vh bg-[#91FFB2]'>
      {/* ctrl+/ */}
      {/* ส่วนบน */}
      <div className='w-8/12  mx-auto flex py-20 justify-between'>
      {/* ส่วนที่ 1 */}
      <div className='flex flex-col'>
        <div>
          <h1 className='text-5xl font-bold text-[#333333]'>
            My Web Design by
          </h1>
          <h1 className='text-5xl font-bold text-[#333333]'>
            React + tailwindCSS
          </h1>
        </div>
        <div className='mt-7'>
          <span className='text-lg text-[#333333]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quae cupiditate a voluptate maiores, <br />
            cumque accusantium eligendi <br />
            facere eaque quisquam fugit. <br />
          </span>
        </div>
        <div className='mt-10'>
          <a href="#" className='bg-[#333333] text-white rounded-4xl py-3 px-6 hover:bg-[#111111]'>
            Follow Me
          </a>
        </div>
        <div className='mt-15 flex'>
          <Link to='/MyPageA'>
            <img src={img1} alt="img1" className='w-60 h-min mr-5'/>
          </Link>
          <Link to='/MyPageB'>
            <img src={img2} alt="img2" className='w-60 h-min'/>
          </Link>
        </div>
      </div>
      {/* ส่วนที่ 2 */}
      <div>
        <Link to = '/MyPageC'>
        <img src={img3} alt="img3" className='w-53'/>
        </Link>
      </div>
      {/* ส่วนที่ 3 */}
      <div>
        <Link to = '/MyPageD'>
          <img src={img4} alt="img4" className='w-32 h-min'/>
        </Link>
      </div>
      </div>
      {/* ส่วนล่าง  */}
      <div className='flex flex-col items-center justify-center text-lg'>
        <span>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</span>
        <span> Created by Mercere</span>
        <span> Copyright © 2025 Wow Wow Wow</span>
      </div>
    </div>
    </>
  )
}
