import React from 'react';
import styles from './Footer.module.css';
import cv from '../../assets/Hussam_Salah_FrontEnd_CV.pdf'

function Footer() {
  const CurrentYear = new Date().getFullYear();


  return (
    <div className={styles.Footer}>
      <div className="flex flex-col gap-5 md:flex-row justify-between px-10 pb-5 text-white containar [&_div]:h-fit">

        <div  className='order-4 md:order-1'>
        <p>© Copyright {CurrentYear}</p>
        <p>Made with ❤️ and 🍵</p>
        </div>


        <div className="flex flex-col order-3 pb-2 border-b-2 md:order-2 md:or md:pb-0 md:border-b-0 md:border-l-2 md:pl-2">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex flex-col pb-2 border-b-2 md:pb-0 md:order-3 md:border-b-0 md:border-l-2 md:pl-2">
          <a href="https://www.linkedin.com/in/hussamsalah399" target='_blank'>Linkedin</a>
          <a href="https://www.facebook.com/100008184736934" target='_blank'>Facebook</a>
          <a href={cv} download>CV</a>
        </div>

        
        <div className="flex flex-col pb-2 border-b-2 md:pb-0 md:border-b-0 md:order-4 md:border-l-2 md:pl-2">
          <a href="mailto:hussamsalah399@gmail.com" className='has-icon'>
            <span className="email-icon">
            <svg viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path d="m19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0 -3-3zm-.67 2-6.33 4.75-6.33-4.75zm.67 12h-14a1 1 0 0 1 -1-1v-9.75l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2l7.4-5.55v9.75a1 1 0 0 1 -1 1z" fill="currentColor"/></svg>
            </span>
            hussamsalah399@gmail.com</a>
          <a href="tel:+201019071584" className='has-icon'>
            <span className='ml-1'>
              <svg viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292-.365-.13-.63-.198-.896.203-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984-1.188-1.057-1.979-2.359-2.214-2.76-.234-.396-.026-.62.172-.818.182-.182.401-.458.604-.698.193-.24.255-.401.396-.661.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297 0 1.943 1.427 3.823 1.625 4.104.203.26 2.807 4.26 6.802 5.979.953.401 1.693.641 2.271.839.953.302 1.823.26 2.51.161.76-.125 2.354-.964 2.688-1.901.339-.943.339-1.724.24-1.901-.099-.182-.359-.281-.76-.458zm-7.245 9.823h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286-5 1.302 1.344-4.865-.323-.5c-1.318-2.099-2.021-4.521-2.021-7.01 0-7.26 5.943-13.182 13.255-13.182 3.542 0 6.865 1.38 9.365 3.88 2.5 2.479 3.88 5.802 3.88 9.323-.01 7.255-5.948 13.177-13.25 13.177zm11.276-24.401c-3.042-2.938-7.042-4.599-11.297-4.599-8.776 0-15.922 7.115-15.927 15.859 0 2.792.729 5.516 2.125 7.927l-2.26 8.214 8.448-2.203c2.328 1.255 4.948 1.927 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865 0-4.234-1.651-8.219-4.661-11.214z" fill="currentColor"/></svg>
              </span>
            +201019071584</a>
          <p className='has-icon'>
          <span className='mx-1'>
          <svg xmlns="http://www.w3.org/2000/svg" height='24' viewBox="5 2 14 20"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" fill="currentColor"></path><circle cx="12" cy="9" r="2.5" fill="currentColor"></circle></svg>
          </span>
            Cairo, Egypt
            </p>
        </div>



      </div>
    </div>
  )
};

export default Footer;
