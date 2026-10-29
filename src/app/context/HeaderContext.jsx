'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const progress = Math.min(window.scrollY / 100, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeaderContext.Provider value={{ scrollProgress }}>
            {children}
        </HeaderContext.Provider>
    );
}

export function useHeader() {
    return useContext(HeaderContext);
}