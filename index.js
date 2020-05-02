
import { useState, useEffect } from 'react';
export default function GetDimensions(myRef) {
    const hasWindow = typeof window !== 'undefined';
    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }
    const getComponentDimensions = () => ({
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight
    });
    const getDimensions = () => {
        if (myRef) {
            return getComponentDimensions()
        }
        return getWindowDimensions();
    }
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions());
        };
        if (hasWindow || myRef.current) {
            setDimensions(getDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [hasWindow]);
    return dimensions;
};
