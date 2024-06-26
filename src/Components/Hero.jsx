import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaBehance, FaDribbble } from 'react-icons/fa';
import './Hero.css'; // Import the CSS file

import IMG1 from '../Assets/Hero/Me45.jpg';
import MYCV from '../Assets/About/MyCV.pdf' // Assuming the CV file is in this path



const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className='relative hero-container'>
      <div className="w-full h-screen bg-center bg-cover hero-bg" style={{ backgroundImage: `url(${IMG1})` }}>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-8'>
          <div>
            <div className='flex flex-col justify-center my-[107px] ml-10 tracking-wide text-white font-londrina'>
              <h1 className='py-2 text-3xl md:text-5xl sm:text-4xl hover:text-[#f7bb7e]'>Hello, I'm</h1>
              <h1 id="name" className='leading-none uppercase md:text-9xl sm:text-8xl text-7xl text-shadow hover:text-[#f7bb7e]'>Ashan <br />Kavindu</h1>
              <h1 className='text-[30px] md:text-5xl sm:text-4xl pb-5 hover:text-[#f7bb7e]'>Front-End-Developer</h1>
              <div className='py-4 md:py-8'>
            {currentSlide === 0 && (
              <a href={MYCV} download className=" hover:border-[#f7bb7e] py-4 px-8 text-xl text-white border-[1px]  border-white hover:bg-[#ffffff] hover:text-[#000000]  rounded">Download CV</a>
            )}
          </div>
            </div>
          </div>
        </div>
        {/* Line elements */}
        <div className="moving-line line1"></div>
        <div className="moving-line line2"></div>
        <div className="moving-line line3"></div>

        {/* Social Media Icons */}
        <div className="absolute flex flex-col space-y-4 text-xl text-white bottom-5 right-5">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaTwitter />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100012056560141" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/ashan-kavindu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ashxn___/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaInstagram />
          </a>
          <a href="https://github.com/Ashankavi" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaGithub />
          </a>
          <a href="https://www.behance.net/ashankavindu2?log_shim_removal=1" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaBehance />
          </a>
          <a href="https://dribbble.com/shanuk05" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaDribbble />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
