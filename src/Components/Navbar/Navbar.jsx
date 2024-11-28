import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

import useIsMobileWidth from '../../hooks/useIsMobileWidth';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobileWidth = useIsMobileWidth();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const links = document.querySelectorAll('nav ul li a');

    // Loop through each link
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup to remove event listeners
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  const handleLinkClick = () => {
    // Close the menu after navigating
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 0);
  };

  return (
    <>
      <div onClick={toggleMenu} className={styles.menu_btn}>
        {!isMenuOpen ? (
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        ) : (
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        )}
      </div>

      <nav
        className={`${styles.Navbar} ${isMobileWidth ? (isMenuOpen ? 'inset-0' : '') : ''}`}
      >
        <ul className={`${isMenuOpen ? styles.open : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact" className={`${styles.active}`}>
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
