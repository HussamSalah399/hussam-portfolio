import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import projectImg from '../../assets/images/project.jpg';
import projectImg1 from '../../assets/images/project-1.png';

import projects from '../../../projects.json'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsMobileWidth from '../../hooks/useIsMobileWidth';

gsap.registerPlugin(ScrollTrigger);


function Projects() {

  const isMobileWidth = useIsMobileWidth();
  
  const containerRef = useRef();
  const titleBoxRef = useRef();


  useGSAP(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleBoxRef.current,
        start: isMobileWidth ? 'top center' : 'top 20%',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        //pinSpacing:true,
        markers: false
      }
    });

    tl.from( ".title-box .discover", {xPercent: -100, duration: 1}, 'start' )
      .from( '.title-box .projects', {xPercent: 80, duration: 1}, 'start' )
      // .from( '.title-box p', {y: 150, duration: 1} )

  }, { scope: containerRef });


  return (
    <section className={styles.Projects} id='projects'>

      <div ref={containerRef} className='container min-h-screen px-10'>

      <div ref={titleBoxRef} className="title-box">
          <h2 className='title'>
            <div className='discover'>Discover</div>
            <div className='projects'>Projects</div>
          </h2>
          {/* <p>Discover my skills and see how I can elevate your project!</p> */}
        </div>
        
        {/* <h2 className='mb-5 text-7xl'>Projects</h2>
        <p>Explore my projects below and see what I can do!</p> */}

        {projects.data.map((project, index) => {
          const { name, description, image, technologies, links } = project;
          return (
            <div className="relative group hover:bg-white transition duration-300" key={index}>
              <a className='text-[6vw] block mb-3 -border-b hover:translate-x-5 group-hover:text-black transition duration-300' href={links.live} target='_blank'><span className='text-sm'>[{index}]</span> {name}</a>
              <img src={image} alt={name} loading='lazy' className='absolute top-0 right-0 z-10 w-1/2 transition duration-300 -translate-y-1/2 opacity-0 group-hover:opacity-100' />
              {/* <p className='text-2xl'>{description}</p> */}
              {/* <div className="flex flex-wrap gap-2 mb-10 cursor-default labels">
                  {technologies.map((technology)=> <span>{technology}</span> )}
                  
                </div> */}
            </div>
          )

        })}

        <a href="https://github.com/HussamSalah399" target='_blank' className='btn btn-primary'>
          <span className="git-icon">
            <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19.906 17.847c.429 0 .79.21 1.102.636.31.422.468.944.468 1.56 0 .619-.156 1.141-.468 1.563s-.678.634-1.102.634c-.451 0-.839-.21-1.151-.634-.307-.422-.465-.944-.465-1.563s.153-1.139.465-1.56c.312-.427.702-.636 1.151-.636zm5.519-5.715c1.202 1.303 1.809 2.884 1.809 4.738 0 1.203-.142 2.286-.415 3.249-.278.958-.629 1.743-1.048 2.343-.427.605-.943 1.136-1.565 1.585-.622.461-1.195.79-1.712 1.002s-1.112.376-1.785.49c-.665.117-1.168.18-1.517.198-.336.015-.702.022-1.097.022-.088 0-.385.01-.879.024-.482.02-.896.029-1.218.029s-.736-.01-1.218-.029c-.49-.015-.79-.024-.879-.024-.395 0-.764-.005-1.098-.022-.35-.017-.852-.08-1.514-.198-.676-.112-1.268-.273-1.787-.49-.517-.21-1.089-.541-1.708-1.002-.624-.454-1.141-.983-1.568-1.585-.419-.6-.772-1.385-1.048-2.343-.272-.963-.414-2.046-.414-3.249 0-1.854.605-3.435 1.81-4.738-.133-.065-.14-.714-.021-1.952.107-1.239.37-2.38.797-3.421 1.503.16 3.352 1.008 5.567 2.539.748-.195 1.772-.295 3.078-.295 1.37 0 2.394.1 3.079.295 1.009-.681 1.975-1.239 2.896-1.663.936-.419 1.609-.667 2.033-.731l.634-.145c.429 1.041.692 2.185.8 3.421.124 1.237.117 1.887-.015 1.952zm-9.373 12.551c2.703 0 4.741-.324 6.125-.973 1.38-.651 2.082-1.99 2.082-4.008 0-1.17-.441-2.15-1.322-2.932-.454-.424-.985-.681-1.595-.781-.595-.098-1.514-.098-2.755 0-1.236.1-2.082.145-2.537.145-.619 0-1.291-.033-2.125-.098-.834-.062-1.487-.102-1.954-.122-.478-.015-.986.045-1.538.172-.557.133-1.008.357-1.373.681-.84.75-1.266 1.725-1.266 2.932 0 2.019.684 3.357 2.05 4.006 1.365.653 3.397.975 6.101.975zm-3.909-6.836c.424 0 .789.21 1.098.636.31.422.467.944.467 1.56 0 .619-.155 1.141-.467 1.563-.309.422-.677.634-1.098.634-.455 0-.841-.21-1.153-.634-.309-.422-.467-.944-.467-1.563s.155-1.139.467-1.56c.312-.427.699-.636 1.153-.636z" /></svg>
          </span>
          More ?
        </a>

        {/* <div className="container flex items-center gap-10">
          <div className="w-1/2 left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet possimus, ut nostrum nam ex itaque, optio perferendis assumenda sint ipsum illum pariatur quos earum, facere illo adipisci dolor obcaecati. Aspernatur est ipsam sequi delectus? Inventore nisi sunt culpa facilis? Laborum exercitationem eveniet, aliquam soluta sapiente deserunt laudantium magni placeat.
          </div>
          <div className="w-1/2 right">
            <div className="relative overflow-hidden rounded-2xl group">
              <img src={projectImg1} alt="" className='object-cover w-full transition duration-300 group-hover:scale-110' />

              <div className='absolute flex justify-end gap-5 text-sm top-4 left-4'>
                <a href="https://disneyplus-clone-82710.firebaseapp.com" target='_blank' className='bg-white px-2 py-[2px] rounded-full text-black fill-black flex items-center gap-1'>
                  <span className="git-icon">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m3 12h19" /><path d="m12 2.2019c2.4744 2.52508 4 5.98336 4 9.798 0 3.8146-1.5256 7.2729-4 9.7979" /><path d="m12 2.2019c-2.47437 2.52508-4 5.98336-4 9.798 0 3.8146 1.52563 7.2729 4 9.7979" /></g></svg>
                  </span>
                  Live
                </a>

                <a href="https://github.com/HussamSalah399/disney-plus-clone" target='_blank' className='bg-white px-2 py-[2px] rounded-full text-black fill-black flex items-center gap-1'>
                  <span className="git-icon">
                    <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19.906 17.847c.429 0 .79.21 1.102.636.31.422.468.944.468 1.56 0 .619-.156 1.141-.468 1.563s-.678.634-1.102.634c-.451 0-.839-.21-1.151-.634-.307-.422-.465-.944-.465-1.563s.153-1.139.465-1.56c.312-.427.702-.636 1.151-.636zm5.519-5.715c1.202 1.303 1.809 2.884 1.809 4.738 0 1.203-.142 2.286-.415 3.249-.278.958-.629 1.743-1.048 2.343-.427.605-.943 1.136-1.565 1.585-.622.461-1.195.79-1.712 1.002s-1.112.376-1.785.49c-.665.117-1.168.18-1.517.198-.336.015-.702.022-1.097.022-.088 0-.385.01-.879.024-.482.02-.896.029-1.218.029s-.736-.01-1.218-.029c-.49-.015-.79-.024-.879-.024-.395 0-.764-.005-1.098-.022-.35-.017-.852-.08-1.514-.198-.676-.112-1.268-.273-1.787-.49-.517-.21-1.089-.541-1.708-1.002-.624-.454-1.141-.983-1.568-1.585-.419-.6-.772-1.385-1.048-2.343-.272-.963-.414-2.046-.414-3.249 0-1.854.605-3.435 1.81-4.738-.133-.065-.14-.714-.021-1.952.107-1.239.37-2.38.797-3.421 1.503.16 3.352 1.008 5.567 2.539.748-.195 1.772-.295 3.078-.295 1.37 0 2.394.1 3.079.295 1.009-.681 1.975-1.239 2.896-1.663.936-.419 1.609-.667 2.033-.731l.634-.145c.429 1.041.692 2.185.8 3.421.124 1.237.117 1.887-.015 1.952zm-9.373 12.551c2.703 0 4.741-.324 6.125-.973 1.38-.651 2.082-1.99 2.082-4.008 0-1.17-.441-2.15-1.322-2.932-.454-.424-.985-.681-1.595-.781-.595-.098-1.514-.098-2.755 0-1.236.1-2.082.145-2.537.145-.619 0-1.291-.033-2.125-.098-.834-.062-1.487-.102-1.954-.122-.478-.015-.986.045-1.538.172-.557.133-1.008.357-1.373.681-.84.75-1.266 1.725-1.266 2.932 0 2.019.684 3.357 2.05 4.006 1.365.653 3.397.975 6.101.975zm-3.909-6.836c.424 0 .789.21 1.098.636.31.422.467.944.467 1.56 0 .619-.155 1.141-.467 1.563-.309.422-.677.634-1.098.634-.455 0-.841-.21-1.153-.634-.309-.422-.467-.944-.467-1.563s.155-1.139.467-1.56c.312-.427.699-.636 1.153-.636z" /></svg>
                  </span>
                  Github
                </a>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center gap-3 p-4 text-white transition duration-300 opacity-0 project-details bg-black/80 group-hover:opacity-100 backdrop-blur">
                
                <p className=''>A web application similar to Disney+</p>
                <div className="flex flex-wrap gap-1 labels">
                  <span>React JS</span>
                  <span>Firebase</span>
                  <span>Styled Components</span>
                  <span>Redux</span>
                </div>

              </div>

            </div>
            <h3 className='my-4'>Disney+ Clone</h3>

          </div>
        </div> */}




        {/* <div className='card h-[600px] md:w-1/2 lg:w-1/4 bg-white text-black rounded-3xl overflow-hidden'>
          <div className='relative h-full rounded-2xl group'>
            <img src={projectImg1} alt="" className='object-cover h-full transition duration-300 group-hover:scale-110' />
            <div className="absolute inset-0 flex flex-col justify-center gap-3 p-4 text-white transition duration-300 opacity-0 project-details bg-black/80 group-hover:opacity-100 backdrop-blur">
              <h3 className='my-4 text-3xl'>Disney+ Clone</h3>
              <p className=''>A web application similar to Disney+</p>
              <div className="flex flex-wrap gap-1 labels">
                <span>React JS</span>
                <span>Firebase</span>
                <span>Styled Components</span>
                <span>Redux</span>
              </div>
              <div className='absolute flex justify-end gap-5 text-right bottom-10 right-4'>
  
                <a href="https://disneyplus-clone-82710.firebaseapp.com" target='_blank' className='bg-gray-500/50 px-2 py-[2px] rounded-full text-white fill-white flex items-center gap-1'>
                  <span className="git-icon">
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m3 12h19"/><path d="m12 2.2019c2.4744 2.52508 4 5.98336 4 9.798 0 3.8146-1.5256 7.2729-4 9.7979"/><path d="m12 2.2019c-2.47437 2.52508-4 5.98336-4 9.798 0 3.8146 1.52563 7.2729 4 9.7979"/></g></svg>
                  </span>
                  Live
                </a>

                <a href="https://github.com/HussamSalah399/disney-plus-clone" target='_blank' className='bg-gray-500/50 px-2 py-[2px] rounded-full text-white fill-white flex items-center gap-1'>
                  <span className="git-icon">
                    <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19.906 17.847c.429 0 .79.21 1.102.636.31.422.468.944.468 1.56 0 .619-.156 1.141-.468 1.563s-.678.634-1.102.634c-.451 0-.839-.21-1.151-.634-.307-.422-.465-.944-.465-1.563s.153-1.139.465-1.56c.312-.427.702-.636 1.151-.636zm5.519-5.715c1.202 1.303 1.809 2.884 1.809 4.738 0 1.203-.142 2.286-.415 3.249-.278.958-.629 1.743-1.048 2.343-.427.605-.943 1.136-1.565 1.585-.622.461-1.195.79-1.712 1.002s-1.112.376-1.785.49c-.665.117-1.168.18-1.517.198-.336.015-.702.022-1.097.022-.088 0-.385.01-.879.024-.482.02-.896.029-1.218.029s-.736-.01-1.218-.029c-.49-.015-.79-.024-.879-.024-.395 0-.764-.005-1.098-.022-.35-.017-.852-.08-1.514-.198-.676-.112-1.268-.273-1.787-.49-.517-.21-1.089-.541-1.708-1.002-.624-.454-1.141-.983-1.568-1.585-.419-.6-.772-1.385-1.048-2.343-.272-.963-.414-2.046-.414-3.249 0-1.854.605-3.435 1.81-4.738-.133-.065-.14-.714-.021-1.952.107-1.239.37-2.38.797-3.421 1.503.16 3.352 1.008 5.567 2.539.748-.195 1.772-.295 3.078-.295 1.37 0 2.394.1 3.079.295 1.009-.681 1.975-1.239 2.896-1.663.936-.419 1.609-.667 2.033-.731l.634-.145c.429 1.041.692 2.185.8 3.421.124 1.237.117 1.887-.015 1.952zm-9.373 12.551c2.703 0 4.741-.324 6.125-.973 1.38-.651 2.082-1.99 2.082-4.008 0-1.17-.441-2.15-1.322-2.932-.454-.424-.985-.681-1.595-.781-.595-.098-1.514-.098-2.755 0-1.236.1-2.082.145-2.537.145-.619 0-1.291-.033-2.125-.098-.834-.062-1.487-.102-1.954-.122-.478-.015-.986.045-1.538.172-.557.133-1.008.357-1.373.681-.84.75-1.266 1.725-1.266 2.932 0 2.019.684 3.357 2.05 4.006 1.365.653 3.397.975 6.101.975zm-3.909-6.836c.424 0 .789.21 1.098.636.31.422.467.944.467 1.56 0 .619-.155 1.141-.467 1.563-.309.422-.677.634-1.098.634-.455 0-.841-.21-1.153-.634-.309-.422-.467-.944-.467-1.563s.155-1.139.467-1.56c.312-.427.699-.636 1.153-.636z" /></svg>
                  </span>
                  Github
                </a>
              </div>
            </div>
          </div>

        </div> */}



      </div>


    </section>
  )
};

export default Projects;
