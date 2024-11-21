import React from 'react';
import styles from './TitleBox.module.css';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TitleBox({
  first,
  second,
  subtitle,
  markers
}) {

  // const { start = 'top 10%', end = 'bottom top', scrub = 1, pin = true, pinSpacing = true } = animationProps;

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.title-box',
        start: 'top 10%',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        // pinSpacing: true,
        markers
      }
    });

    tl.from(".title-box .first", { x: '-50vw', duration: 2, ease: "power2.out" }, 'start')
      .from('.title-box .second', { x: '40vw', duration: 2, ease: "power2.out" }, 'start')
      .from('.title-box p', { y: 200, duration: 5, ease: "power2.out" })

  }, {});

  return (
    <div className={styles.TitleBox}>

      <div className="title-box -bg-red-900">
        <h2 className='title'>
          <div className='first'>{first}</div>
          <div className='second'>{second}</div>
        </h2>
        <p className='sub-title'>{subtitle}</p>
      </div>

    </div>
  )
};

export default TitleBox;