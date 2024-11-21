import React, { useEffect, useState } from 'react';
import styles from './ResponsiveTest.module.css';

function ResponsiveTest() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [currentScreen, setCurrentScreen] = useState();

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // تنظيف الحدث عند إزالة المكون
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    switch (true) {
      case currentWidth >= 1536:
        setCurrentScreen("'2xl': '1536px'");
        break;
      case currentWidth >= 1280:
        setCurrentScreen("'xl': '1280px'");
        break;
      case currentWidth >= 1024:
        setCurrentScreen("'lg': '1024px'");
        break;
      case currentWidth >= 768:
        setCurrentScreen("'md': '768px'");
        break;
      case currentWidth >= 640:
        setCurrentScreen("'sm': '640px'");
        break;
      default:
        setCurrentScreen("Less than 640px");
    }
  }, [currentWidth]);

  return (
    <div className={styles.ResponsiveTest}>

      {/* {`current width: ${currentWidth}px`}
      {`current screen: ${currentScreen}`} */}

      <div>current width: {currentWidth} px</div>
      <div>current screen: {currentScreen}</div>
    </div>
  );
}

export default ResponsiveTest;
