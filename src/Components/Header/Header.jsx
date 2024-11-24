import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/images/Waving-Hand.json';
import hussam3DImg from '../../assets/images/hussam3d.png';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Header() {

  // State to handle hovering
  const [isHovered, setIsHovered] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: isHovered,
    stop: !isHovered,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieStyle = { display: 'inline-block', verticalAlign: 'middle' }

  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 10%',
        // end: 'bottom 75%',
        // scrub: 1,
        // pin: true,
        // markers: true,
        toggleActions: 'play reverse restart reverse'
      }
    });

    tl.from('.hero-left div', { yPercent: 100, opacity: 0, duration: .5, stagger: .25 })

  }, { scope: containerRef });

  return (
    <header
      ref={containerRef}
      className="flex min-h-screen p-5 hero md:h-screen place-items-center"
      id='home'
      onMouseEnter={() => setIsHovered(true)} // Start loop on hover
      onMouseLeave={() => setIsHovered(false)} // Stop loop when hover ends
    >
      <div className="w-full h-full bg-[#0d0d0d] rounded-[24px] ">

        <div className="flex flex-col items-center w-full h-full md:flex-row md:flex-nowrap -bg-red-900">

          <div className="hero-left mt-20 pl-5 md:mt-0  -md:absolute h-full text-3xl -bg-lime-800 flex flex-col justify-center gap-5 [&_div]:overflow-hidden text-white">

            <div>
              <span className="hello">
                Hello
                <span style={lottieStyle}>
                  <Lottie
                    options={defaultOptions}
                    height={40}
                    width={40}
                    isStopped={!isHovered}
                  />
                </span>,
                I'am
              </span>
            </div>

            <div>
              <h1 className="my-name text-[5rem] sm:text-[7rem] -md:text-[10vw] font-bold md:ml-[-7px] [&_div]:overflow-hidden">
                <div>Hussam</div>
                <div>Salah.</div>
              </h1>
            </div>

            <div className='[&_div]:overflow-hidden"'>

              <div className='overflow-hidden'>
                <p className='bg-[#FB4E29] text-black w-fit'>Front-End Developer & Designer</p>
              </div>

              <div className='mt-2'>
                <p>I love to create awesome websites.</p>
              </div>

              <div>
                <h6 className="mt-10 text-sm">
                  <span className='animate-online w-2 h-2 inline-block rounded-full bg-[#28e98c] mr-2'></span>
                  available for freelance
                </h6>
              </div>

            </div>

            {/* <button className="flex items-center gap-2 btn btn-primary w-fit">
              <div className="icon [&_svg]:w-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 9"><path fill="currentColor" fill-rule="evenodd" d="M0 0h9v9H8V1.707L.713 8.994l-.707-.707L7.293 1H0z" clip-rule="evenodd"></path></svg>
              </div>
              Hire me
            </button>

            <button className="flex items-center gap-2 btn btn-primary w-fit">
              <div className="icon [&_svg]:w-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 9"><path fill="currentColor" fill-rule="evenodd" d="M0 0h9v9H8V1.707L.713 8.994l-.707-.707L7.293 1H0z" clip-rule="evenodd"></path></svg>
              </div>
              Download CV
            </button> */}

            {/* <p className='relative top-5'>My name is</p> */}
          </div>

          <div className='hero-right mx-auto h-full -bg-slate-950'>
            <img
              src={hussam3DImg}
              alt="Hussam 3d image"
              loading='lazy'
              className="object-contain object-bottom w-full h-[450px] md:h-full -bg-orange-400 "
            />

          </div>


          {/* <InfiniteScroll /> */}
        </div>



        {/* <div className="fixed z-50 font-black test text-9xl left-10 mix-blend-difference">test</div> */}


        {/* <div>
          <button className='btn btn-primary'>Download CV</button>
          <button className='btn btn-secondary'>Download CV</button>
          </div> */}
      </div>
    </header>
  );
}

export default Header;
