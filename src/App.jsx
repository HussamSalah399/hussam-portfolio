import { useEffect, useLayoutEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'
import Test from './Components/Test/Test'
import ResponsiveTest from './Components/ResponsiveTest/ResponsiveTest'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

function App() {

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

useLayoutEffect(() => {
  const loadedHandler = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener('load', loadedHandler);

  return () => window.removeEventListener('load', loadedHandler);
});



  // useEffect(() => {

  //   const titles = document.querySelectorAll('h2.title');

  //   titles.forEach(heading => {
  //     const headingText = heading.textContent;
  //     heading.setAttribute('data-content', headingText);
  //   });

  // }, [])

  return (
    <>
    {/* <ResponsiveTest /> */}
      <Navbar />
      <Header />
      <InfiniteScroll />

      {/* <Test /> */}

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />


      {/* <div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur culpa aliquam eligendi tenetur minima cum quam perferendis vel nesciunt aperiam facilis excepturi at quasi fugit obcaecati impedit harum dolores, beatae enim alias libero praesentium magnam aliquid quas? Velit autem minima, a similique provident deserunt exercitationem eligendi facere tempore hic quas! Magnam enim quam in nihil impedit, dolorum cupiditate unde magni? Quis at non dignissimos, esse commodi doloremque nihil? Deleniti voluptatibus in laborum, repudiandae ab perspiciatis quisquam magnam. Voluptates, soluta. Rem, fuga quos nulla minima quo ab. Numquam quos perferendis omnis repellendus sint voluptate consequatur ipsam tempora itaque fugit doloremque incidunt, natus, vero quidem rerum voluptatibus quia. Voluptatibus ipsa mollitia, quidem eveniet ipsam hic aliquid alias at. Itaque nihil sunt ea harum ullam voluptatem dignissimos ut accusamus totam delectus quasi doloribus illum libero, quia veritatis. Deleniti minima enim recusandae aperiam cumque, fugiat laborum ipsa quidem natus non. Error, soluta at voluptatem voluptas quibusdam recusandae ut porro veritatis pariatur, praesentium adipisci. Beatae totam laboriosam quam quisquam neque ipsa nemo voluptatum dolores molestias tenetur nobis cupiditate praesentium atque labore, cum aliquam magnam earum non provident adipisci facilis possimus. Velit, molestias. Repudiandae, distinctio necessitatibus saepe dolore cum quidem recusandae at expedita molestiae laborum corrupti reiciendis sequi quas asperiores aspernatur, ducimus quia odit animi rerum delectus. Cum, quibusdam. Iure reiciendis voluptate, aspernatur vero excepturi veritatis cupiditate, eos dolore cum similique ipsam error! Eos numquam perferendis suscipit iusto voluptates magnam mollitia voluptate qui odit ratione! Quisquam inventore praesentium similique placeat delectus earum odio vitae qui! Pariatur placeat blanditiis eius modi eaque! Harum nam atque, similique ratione explicabo beatae earum ipsum magni debitis quam impedit error blanditiis! Nostrum, cum nemo. Ullam molestias at ipsa maiores ea, autem a magnam, veniam amet obcaecati sequi dolores commodi adipisci quis, delectus accusamus quisquam. Enim qui pariatur molestiae vero beatae error alias eos! Itaque, quas? Ad, culpa consectetur eveniet nihil placeat quam rem accusamus nemo, eum, voluptates consequatur incidunt fugiat! Fugit illo debitis vel, eum nisi nulla dolore aspernatur dignissimos recusandae saepe temporibus voluptas explicabo nesciunt sit tempora adipisci ipsa dolor quis porro facere minima accusamus libero molestias? Cumque quidem nam vero sed culpa nesciunt temporibus magni maxime, ad odio commodi expedita amet similique eius. Dignissimos est voluptatibus pariatur accusantium veniam libero quasi expedita illo nemo voluptate modi error a, quam sapiente, voluptatum porro vel? Eum totam adipisci nostrum iusto ipsam minus voluptatum similique in? Laudantium eos quidem doloremque voluptatibus ipsa dolorum mollitia, nesciunt amet id eligendi? Amet sequi quam recusandae. Debitis provident dicta soluta eveniet voluptate pariatur in aspernatur et qui necessitatibus fugiat consectetur amet ab nulla, adipisci hic iste totam autem doloremque! Non quia assumenda reiciendis veniam harum necessitatibus eos cumque impedit quasi ea nam esse eligendi blanditiis libero, accusantium temporibus repudiandae perferendis, iure ipsam molestias mollitia tempore et illo distinctio. Cumque quis neque earum id sapiente quasi debitis in nihil similique. Enim, beatae totam ipsam, provident porro omnis, minus obcaecati voluptatum explicabo accusamus illo! Id, voluptate? Illum ea quibusdam explicabo assumenda totam nesciunt provident officia! Quam, dolorem aliquid?
      </div>
      <img width='100%' src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur culpa aliquam eligendi tenetur minima cum quam perferendis vel nesciunt aperiam facilis excepturi at quasi fugit obcaecati impedit harum dolores, beatae enim alias libero praesentium magnam aliquid quas? Velit autem minima, a similique provident deserunt exercitationem eligendi facere tempore hic quas! Magnam enim quam in nihil impedit, dolorum cupiditate unde magni? Quis at non dignissimos, esse commodi doloremque nihil? Deleniti voluptatibus in laborum, repudiandae ab perspiciatis quisquam magnam. Voluptates, soluta. Rem, fuga quos nulla minima quo ab. Numquam quos perferendis omnis repellendus sint voluptate consequatur ipsam tempora itaque fugit doloremque incidunt, natus, vero quidem rerum voluptatibus quia. Voluptatibus ipsa mollitia, quidem eveniet ipsam hic aliquid alias at. Itaque nihil sunt ea harum ullam voluptatem dignissimos ut accusamus totam delectus quasi doloribus illum libero, quia veritatis. Deleniti minima enim recusandae aperiam cumque, fugiat laborum ipsa quidem natus non. Error, soluta at voluptatem voluptas quibusdam recusandae ut porro veritatis pariatur, praesentium adipisci. Beatae totam laboriosam quam quisquam neque ipsa nemo voluptatum dolores molestias tenetur nobis cupiditate praesentium atque labore, cum aliquam magnam earum non provident adipisci facilis possimus. Velit, molestias. Repudiandae, distinctio necessitatibus saepe dolore cum quidem recusandae at expedita molestiae laborum corrupti reiciendis sequi quas asperiores aspernatur, ducimus quia odit animi rerum delectus. Cum, quibusdam. Iure reiciendis voluptate, aspernatur vero excepturi veritatis cupiditate, eos dolore cum similique ipsam error! Eos numquam perferendis suscipit iusto voluptates magnam mollitia voluptate qui odit ratione! Quisquam inventore praesentium similique placeat delectus earum odio vitae qui! Pariatur placeat blanditiis eius modi eaque! Harum nam atque, similique ratione explicabo beatae earum ipsum magni debitis quam impedit error blanditiis! Nostrum, cum nemo. Ullam molestias at ipsa maiores ea, autem a magnam, veniam amet obcaecati sequi dolores commodi adipisci quis, delectus accusamus quisquam. Enim qui pariatur molestiae vero beatae error alias eos! Itaque, quas? Ad, culpa consectetur eveniet nihil placeat quam rem accusamus nemo, eum, voluptates consequatur incidunt fugiat! Fugit illo debitis vel, eum nisi nulla dolore aspernatur dignissimos recusandae saepe temporibus voluptas explicabo nesciunt sit tempora adipisci ipsa dolor quis porro facere minima accusamus libero molestias? Cumque quidem nam vero sed culpa nesciunt temporibus magni maxime, ad odio commodi expedita amet similique eius. Dignissimos est voluptatibus pariatur accusantium veniam libero quasi expedita illo nemo voluptate modi error a, quam sapiente, voluptatum porro vel? Eum totam adipisci nostrum iusto ipsam minus voluptatum similique in? Laudantium eos quidem doloremque voluptatibus ipsa dolorum mollitia, nesciunt amet id eligendi? Amet sequi quam recusandae. Debitis provident dicta soluta eveniet voluptate pariatur in aspernatur et qui necessitatibus fugiat consectetur amet ab nulla, adipisci hic iste totam autem doloremque! Non quia assumenda reiciendis veniam harum necessitatibus eos cumque impedit quasi ea nam esse eligendi blanditiis libero, accusantium temporibus repudiandae perferendis, iure ipsam molestias mollitia tempore et illo distinctio. Cumque quis neque earum id sapiente quasi debitis in nihil similique. Enim, beatae totam ipsam, provident porro omnis, minus obcaecati voluptatum explicabo accusamus illo! Id, voluptate? Illum ea quibusdam explicabo assumenda totam nesciunt provident officia! Quam, dolorem aliquid?
      </div>
      <img width='100%' src="https://images.unsplash.com/photo-1725988208207-a15e5f5eb5fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> */}

    </>
  )
}

export default App
