import { useEffect, useRef } from "react";

function InfiniteScroll() {

  const ulRef = useRef();
  const repeatCount = 4; // عدد مرات التكرار اللي عايز تتحكم فيها

  useEffect(() => {
    const ul = ulRef.current;

    // تكرار العنصر بناءً على repeatCount
    for (let i = 0; i < repeatCount; i++) {
      const clone = ul.cloneNode(true);  // نسخ العنصر
      clone.setAttribute('aria-hidden', 'true');  // تعيين aria-hidden
      ul.parentNode.appendChild(clone);  // إضافة النسخة إلى الـ DOM
    }
  }, [repeatCount]);


  return (
    <div className="InfiniteScroll w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]" >
      <ul ref={ulRef} className=" animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none">

        <li>Designer</li>
        <li>Developer</li>

      </ul>

    </div>
  );
}

export default InfiniteScroll;
