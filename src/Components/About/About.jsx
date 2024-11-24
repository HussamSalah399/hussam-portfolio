import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import hussamImg from '../../assets/images/hussam2.png';
import hussamVideo from '../../assets/images/video.mp4';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleBox from '../TitleBox/TitleBox';
import useIsMobileWidth from '../../hooks/useIsMobileWidth';

gsap.registerPlugin(ScrollTrigger);

function About() {
  
  const isMobileWidth = useIsMobileWidth();
  
  const containerRef = useRef();
  const titleBoxRef = useRef();

  useGSAP(() => {
    const titleBox = titleBoxRef.current;
    const titleBoxHeight = titleBox.offsetHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleBox,
        start: isMobileWidth ? 'top center' : 'top 10%',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        // pinSpacing: true,
        // markers: true,
      }
    });


    tl.from(".title-box .about", { xPercent: -100, duration: 2, ease: "power2.out" }, 'start')
      .from('.title-box .me', { xPercent: 100, duration: 2, ease: "power2.out" }, 'start')
      .from('.title-box p', { y: 200, opacity: 0, duration: 5, ease: "power2.out" })

    // .to(".title-box", { scale: .3, duration: 2})
    // .to(".title-box", { height: 'auto', duration: 1, ease: "none" });

  }, { scope: containerRef });

  const CurrentYear = new Date().getFullYear();


  return (
    <section ref={containerRef} className='pt-24 -bg-red-900' id='about'>
      <div className="container relative px-10 overflow-hidden">

        <div ref={titleBoxRef} className="title-box -bg-red-900">
          <h2 className='title'>
            <div className='about'>About</div>
            <div className='me'>Me</div>
          </h2>
          <p className='sub-title'>Learn more about my journey, experiences, and what drives me every day!</p>
        </div>


        <div className="flex flex-col-reverse gap-5 mt-5 md:mt-10 md:flex-row -bg-lime-900">

          <div className="animated-text md:w-1/2">
          Hi, I’m Hussam Salah, a {CurrentYear - 1999}-year-old front-end developer based in Cairo, Egypt. Despite my background in accounting and graduating from Cairo University in 2022, my passion for web design and development led me to shift careers. I specialize in creating modern, interactive, and visually appealing user interfaces using technologies like React and GSAP. Problem-solving, animations, and responsive designs are at the heart of my work. I love crafting experiences that not only look good but feel seamless. Outside of coding, I’m always exploring new design trends and leveling up my skills to stay ahead in this ever-evolving field.
          </div>

          <div className="flex md:w-1/2 -bg-red-900">
            <div className="w-1/2 img-1 ">
              <img src={hussamImg} alt="Hussam photo" loading='lazy' className='w-full h-[300px] object-contain object-top' />
            </div>
            <div className="w-1/2 img-2 ">
              <div className='relative cursor-not-allowed hussam-video group'>
                <video src={hussamVideo} autoPlay loop muted></video>
                <div className="absolute inset-0 flex items-center justify-center w-full text-3xl text-center text-white transition duration-300 opacity-0 bg-black/70 group-hover:opacity-100 backdrop-blur">
                  <p>Don't Touch it's Art</p>
                </div>
              </div>
            </div>
          </div>
 
        </div>

      </div>
    </section>
  );
}

export default About;
