import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 640;

const useIsMobileWidth = () => {
    const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileWidth(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobileWidth;
};

export default useIsMobileWidth;