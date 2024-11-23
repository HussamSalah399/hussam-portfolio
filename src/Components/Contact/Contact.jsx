import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsMobileWidth from '../../hooks/useIsMobileWidth';
import ContactForm from '../ContactForm/ContactForm';

gsap.registerPlugin(ScrollTrigger);

function Contact() {

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
        // pinSpacing: true,
        // markers: true
      }
    });

    tl.from(".title-box .git-in", { xPercent: -100, duration: 1 }, 'start')
      .from('.title-box .touch', { xPercent: 80, duration: 1 }, 'start')
    // .from( '.title-box p', {y: 150, duration: 1} )

  }, { scope: containerRef });

  return (
    <section className={styles.Contact} id='contact'>

      <div ref={containerRef} className="container px-10">

        <div ref={titleBoxRef} className="title-box">
          <h2 className='title'>
            <div className='git-in'>Git In</div>
            <div className='touch'>Touch</div>
          </h2>
          {/* <p>Discover my skills and see how I can elevate your project!</p> */}
        </div>

        <div className="col-12 col-lg-8">
          <p className="text-[7vw] md:text-5xl line-height-60">
            Have a project in mind? Let’s get to work. <br />
            I’m always open for a chat, so feel free to reach <br />
            out and see how I can help.
          </p>
        </div>


        <ContactForm />




      </div>

    </section>
  )
};

export default Contact;
