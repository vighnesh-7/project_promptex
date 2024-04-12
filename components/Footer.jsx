import Image from 'next/image';
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative bg-gray-700 w-full bottom-0 left-0 before:absolute before:top-0 before:left-0' >
      <div className="content " style={{
          margin: 'auto',
          padding: '10px 40px 40px 40px',
      }} >
        <div className="top flex-between mb-[25px]">
          <div className="logo-details flex-between text-slate-50 " >
            <Image src="assets/images/logo.svg" width='50' height={'50'} className='mr-2' />
            <span className="text-3xl font-semibold " style={{fontWeight:'600'}} >Promptex</span>
          </div>
          <div className="media-icons sm:flex hidden">
            <a style={{  
              width: "40px",
              height: '40px',
              fontSize: "25px",
              textDecoration: "none",
              transition: 'all 0.4s ease',}} className='bg-blue-600 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white  hover:text-blue-600' href="/"><FaFacebookF /></a>
            <a style={{  
              width: "40px",
              height: '40px',
              fontSize: "25px",
              textDecoration: "none",
              transition: 'all 0.4s ease',}} className=' bg-pink-600 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white hover:text-pink-600  ' href="/"><FaInstagram /></a>
            <a style={{  
              width: "40px",
              height: '40px',
              fontSize: "25px",
              textDecoration: "none",
              transition: 'all 0.4s ease',}} className=' bg-blue-500 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white hover:text-blue-600' href="/"><FaLinkedinIn /></a>
            <a style={{  
              width: "40px",
              height: '40px',
              margin: "0 8px",
              fontSize: "25px",
              textDecoration: "none",
              transition: 'all 0.4s ease',}} className=' bg-red-600 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white hover:text-red-600 ' href="/"><FaYoutube  /></a>
            <a style={{  
              width: "40px",
              height: '40px',
              margin: "0 8px",
              fontSize: "25px",
              textDecoration: "none",
              transition: 'all 0.4s ease',}} className=' bg-black p-2 mr-5 rounded-3xl text-white text-center hover:bg-white  hover:text-black ' href="/" ><FaXTwitter /></a>
          </div>
        </div>
        <hr className='w-full absolute left-0' />
        <div className="link-boxes pt-4  w-full flex justify-between   ">
          <ul className="box" style={{  width: ' calc(100% / 5 - 10px)'}}>
            <li className="link_name relative text-slate-50 font-semibold mb-1  text-lg">Company</li>
            <li><a href="/" className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}}>Home</a></li>
            <li><a href="/" className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}}>Contact us</a></li>
            <li><a href="/" className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}}>About us</a></li>
            <li><a href="/" className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}}>Get started</a></li>
          </ul>

          <ul className="box " style={{  width: ' calc(100% / 5 - 10px)',  transition: 'background 10.4s ease-out',}}>
            <li className="link_name relative text-slate-50 font-semibold mb-1  text-lg">Also</li>
            <li><a className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}} href="/">HTML & CSS</a></li>
            <li><a className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}} href="/">JavaScript</a></li>
            <li><a className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}} href="/">ChatGpt Prompts</a></li>
            <li><a className='text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium' style={{transition:'all 0.5s ease'}} href="/">PromptGenie</a></li>
          </ul>
          <ul className="box mr-8 input-box text-black hidden sm:block" style={{  width: ' calc(100% / 5 - 10px)'}} >
            <li className="link_name relative text-slate-50 font-semibold mb-1  text-lg sm:flex-col m">Subscribe</li>
            <li><input type="text " className='bg-stone-300 py-1 md:px-4 w-[139px] md:w-52 h-[38px]  px-2 rounded-md'  placeholder="Enter your email..." /></li>
            <li><input className='bg-gray-200 pb-1 text-blue-900 font-bold border-none text-xl cursor-pointer mx-0 my-3 opacity-50 hover: hover:opacity-100 rounded-lg py-1 md:px-4 w-[139px] md:w-52 h-[38px] ' 
            style={{transition: 'all 0.4s ease'}} 
            type="button" value="Subscribe" /
            >
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details w-full py-2 px-4 bg-zinc-600 ">
        <div className="bottom_text m-auto max-sm:inline  flex-between">
          <span className="copyright_text opacity-80 block text-slate-50 hover:opacity-100 ">Copyright © 2024 by Vighnesh Vangari
            <a className='opacity-90 text-slate-50  hover:underline px-4 hover:opacity-100'  href="/">Promptex</a>
            <br className=' sm:hidden' />
              All rights reserved
          </span>
          <span className=" opacity-80 mt-1 text-slate-50 hover:opacity-100 flex-between">
            <a className='hover:underline ' >
              <Link href="https://github.com/vighnesh-7/project_promptex" className=' hover:text-gray-200 space-x-2 flex items-center'>
                <FaGithub className='my-1 me-1 w-5 h-5 hover:bg-gray-50 hover:text-gray-950 rounded-full ' />
                Github
              </Link>
            </a>
            <a className='opacity-80 text-slate-50  hover:underline sm:px-4 hover:opacity-100'  href="/">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


{/* css part  */}
{/* 
.box:hover .link_name{
    background: rgb(51, 187, 224);
    background: linear-gradient(75deg, rgba(51, 187, 224, 1) 0%, rgba(234, 100, 232, 1) 38%, rgba(12, 238, 135, 1) 65%, rgba(229, 81, 240, 1) 100%);;
    background-clip: text;
    color:transparent;
    font-size: 22px;
    font-weight: bold;
}

.box input[type="text"] {
    height: 2.3rm;
    width: calc(100% + 55px);
    outline: none;
    border: 2px olid #afafb6;
    border-radius: 4px;
    font-size: 15px;
    margin-top: 5px;
    background-color: red;
}

@media (max-width: 607px) {
    .box:hover .link_name {
        background: rgb(51, 187, 224);
        background: linear-gradient(75deg, rgba(51, 187, 224, 1) 0%, rgba(234, 100, 232, 1) 38%, rgba(12, 238, 135, 1) 65%, rgba(229, 81, 240, 1) 100%);
        background-clip: text;
        color: transparent;
        font-size: 0.95rem;
        font-weight: bold;
    }

}*/}