import React, { useEffect } from 'react';
import '../sass/About.scss';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io5';
import { DiJqueryLogo } from 'react-icons/di';
import { SiTailwindcss, SiPhp, SiMysql, SiAdobexd } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import AOS from 'aos';
import "aos/dist/aos.css";


function About() {
    useEffect(() => {
        AOS.init({
          duration : 1000,
          once: true
        });
      }, []);

  return (
    <section className='about-section' id='about'>
        <svg className='element1' width="91" height="199" viewBox="0 0 91 199" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_740_810" fill="white">
            <path d="M0 54H91V199H0V54Z"/>
            </mask>
            <path d="M0 54H91V199H0V54Z" fill="white"/>
            <path d="M0 54V53H-1V54H0ZM91 54H92V53H91V54ZM91 199V200H92V199H91ZM0 199H-1V200H0V199ZM0 55H91V53H0V55ZM90 54V199H92V54H90ZM91 198H0V200H91V198ZM1 199V54H-1V199H1Z" fill="#CDCDCD" mask="url(#path-1-inside-1_740_810)"/>
            <circle cx="27.0362" cy="27.0362" r="26.5362" fill="white" stroke="#CDCDCD"/>
        </svg>
       <div className='wrapper' data-aos="fade-up">
            <div className='left-content'>
                <figure>
                    <img src="./assets/francebeam.jpg" alt="francis" />
                </figure>
            </div>
            <div className='right-content'>
                <div className='content'>
                    <h1 className='animate__animated animate__fadeIn'>About Me</h1>
                    <p>Hi, my name is Francis Beam Santander. I am a self-taught web developer and UX/UI designer. I am graduating student college at Bulacan State University in the Philippines, and I live in Norzagaray, Bulacan.</p>
                    <p>I enjoy assisting people in building amazing frontends with a touch of backend development to incorporate essential functionalities. I also have a passion for designing unique products for websites, enabling businesses to enhance their strategic approaches. I am excited to provide my services and apply my skills to various projects.</p>
                </div>
                <div className='stacks'>
                    <div className='technologies-stack'>
                        <h1>Front End Development</h1>
                            <div className='front-technologies'>
                                <FaHtml5 className='icon-tech' size={37} />
                                <FaCss3Alt className='icon-tech' size={37}  />
                                <IoLogoJavascript className='icon-tech' size={37} />
                                <IoLogoSass className='icon-tech' size={37} />
                                <DiJqueryLogo className='icon-tech' size={37} />
                                <FaReact className='icon-tech' size={37} />
                                <SiTailwindcss className='icon-tech' size={37} />
                                <FaBootstrap className='icon-tech' size={37} />
                            </div>
                    </div>
                    <div className='technologies-stack'>
                        <h1>Back End Development</h1>
                            <div className='back-technologies'>
                                <SiPhp className='icon-tech' size={37} />
                                <SiMysql className='icon-tech' size={37} />
                            </div>
                    </div>
                    <div className='technologies-stack'>
                        <h1>Other Skills</h1>
                            <div className='other-technologies'>
                                <SiAdobexd className='icon-tech' size={32} />
                                <FiFigma className='icon-tech' size={32} />
                                <BsGit className='icon-tech' size={32} />
                            </div>
                    </div>
                </div>
                <svg className='element2' width="94" height="16" viewBox="0 0 94 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7.5" stroke="white"/>
                    <circle cx="34" cy="8" r="7.5" stroke="white"/>
                    <circle cx="60" cy="8" r="7.5" stroke="white"/>
                    <circle cx="86" cy="8" r="7.5" stroke="white"/>
                </svg>
            </div>
        </div>
    </section>
  )
}

export default About
